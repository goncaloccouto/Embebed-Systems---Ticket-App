package com.example.senhas;

import java.util.List;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
class SenhaController {

    private final SenhaRepository repository;

    SenhaController(SenhaRepository repository) {
        this.repository = repository;
    }

    // Aggregate root

    @GetMapping("/senhas")
    List<Senha> all() {
        return repository.findAll();
    }

    @GetMapping("/pedirsenha")
    Senha novaSenha() {
        Senha novasenha = new Senha();
        if(repository.findAll().size() == 0) {
            System.out.println(novasenha);
            return repository.save(novasenha);
        }
        Long temp = repository.findAll().get(0).getSenhaAtual();
        novasenha.setSenhaAtual(temp);
        return repository.save(novasenha);
    }

    @GetMapping("/avancarsenha")
    void avancarSenha(){
        List<Senha> lista = repository.findAll();
        Long temp = lista.get(0).getSenhaAtual();
        for(Senha senha: lista){
            System.out.println(temp);
            System.out.println(temp+1L);
            senha.setSenhaAtual(temp+1L);
            repository.save(senha);
        }
    }

    // Single item

    @GetMapping("/senhas/{id}")
    Senha one(@PathVariable Long id) {

        return repository.findById(id)
                .orElseThrow(() -> new SenhaNotFoundException(id));
    }

    @DeleteMapping("/senhas/{id}")
    void deleteSenha(@PathVariable Long id) {
        repository.deleteById(id);
    }
}