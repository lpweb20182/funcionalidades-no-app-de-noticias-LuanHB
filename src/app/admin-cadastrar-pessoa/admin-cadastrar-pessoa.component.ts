import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../autores.service';
import { Pessoa } from '../pessoa.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-cadastrar-pessoa',
  templateUrl: './admin-cadastrar-pessoa.component.html',
  styleUrls: ['./admin-cadastrar-pessoa.component.css']
})
export class AdminCadastrarPessoaComponent implements OnInit {
  nome = null;
  email = null;
  pessoa = null;

  salvar_ok = false;
  salvar_erro = false;

  constructor(private autores_service: AutoresService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    if(id != 'novo'){
      this.pessoa = this.autores_service.encontrar(Number.parseInt(id)).subscribe(
        pessoa=> {
          
        },
        erro => {
          console.log(erro);
        }
      )
    }
    console.log(this.pessoa)
    this.nome = this.pessoa.nome;
      this.email = this.pessoa.email;
  }
  
  salvar() {
    this.autores_service.salvar(this.nome, this.email).subscribe(
        (pessoa: Pessoa) => {
              this.salvar_ok = true;
        },
        erro => {
          console.log(erro);
          this.salvar_erro = true;
        }
      );
  }
}
