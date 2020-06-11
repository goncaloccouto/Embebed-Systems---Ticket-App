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
        this.codigo = 100000 + (long) (Math.random() * (999999 - 100000));
        this.senhaAtual = 0L;
    }

}