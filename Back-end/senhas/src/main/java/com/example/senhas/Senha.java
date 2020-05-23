package com.example.senhas;

import lombok.Data;

import javax.persistence.*;
import java.util.Random;

@Data
@Entity
@Table(name = "senha")
class Senha {

    @Column(name = "idsenha")
    private @Id @GeneratedValue(strategy = GenerationType.AUTO) Long id;
    @Column(name = "codigo")
    private Long codigo;
    @Column(name = "senha_atual")
    private Long senhaAtual;

    Senha() {
        this.codigo = Math.abs(new Random().nextLong());
        this.senhaAtual = 0L;
    }

}