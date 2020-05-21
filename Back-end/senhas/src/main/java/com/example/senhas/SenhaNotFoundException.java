package com.example.senhas;

class SenhaNotFoundException extends RuntimeException {

    SenhaNotFoundException(Long id) {
        super("Senha não encontrada " + id);
    }
}