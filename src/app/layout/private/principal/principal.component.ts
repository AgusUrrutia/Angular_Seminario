import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/shared/services/autentificacion.service';
import { UsersDataService } from 'src/app/shared/services/users-data.service';
import { Usuario } from 'src/app/shared/services/usuario';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public user: Usuario = {
    id: "",
    usuario: "",
    password : "",
    role : "",
    imagenesFavs:[]
  }
  isAdmin(): boolean {
      console.log(this.loginProv.user.role);
      console.log(this.loginProv.user.usuario);
      return this.user.role == "admin";
  }
  public visualizarMenu(): boolean {
    this.user = this.loginProv.user;
    return this.loginProv.habilitarLogueo();
  }
  public usuarios : Usuario[] = [];

  desLoguearse(): void {
    this.loginProv.desHabilitarLogueo();
  }
  

  constructor( 
    private loginProv : AutentificacionService, 
    private users: UsersDataService
    ) {}

  ngOnInit(): void {
    this.users.getAll()
    .subscribe(usuario => this.usuarios = usuario);
    this.user = this.loginProv.user;
  }

  
}
