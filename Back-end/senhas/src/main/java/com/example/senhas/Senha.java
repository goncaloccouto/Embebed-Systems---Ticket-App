package com.example.senhas;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Random;

@Data
@Entity
class Senha {

    private @Id @GeneratedValue Long id;
    private Long codigo;
    private Long senhaAtual;

    Senha() {
        this.codigo = Math.abs(new Random().nextLong());
        this.senhaAtual = 0L;
    }

}