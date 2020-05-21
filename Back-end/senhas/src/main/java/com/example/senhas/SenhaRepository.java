package com.example.senhas;

import org.springframework.data.jpa.repository.JpaRepository;

interface SenhaRepository extends JpaRepository<Senha, Long> {

}