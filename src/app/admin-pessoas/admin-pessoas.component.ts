import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../autores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-pessoas',
  templateUrl: './admin-pessoas.component.html',
  styleUrls: ['./admin-pessoas.component.css']
})
export class AdminPessoasComponent implements OnInit {
  pessoas$ = null;
  constructor(private serviceAutores: AutoresService, private router: Router) { }

  ngOnInit() {
    this.pessoas$ = this.serviceAutores.todos();
  }

}
