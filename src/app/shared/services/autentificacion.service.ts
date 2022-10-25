import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersDataService } from './users-data.service';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})




export class AutentificacionService implements OnInit{
  

  
  private contador: number = 0;
  private usuarios: Usuario[] = [];
  private logueado: boolean = false;
  public user: Usuario = {
    id: "",
    usuario: "",
    password : "",
    role : "",
    imagenesFavs:[]
  };
  public userRegister: Usuario = {
    id: "",
    usuario: "",
    password : "",
    role: "nada",
    imagenesFavs:[]
  };
  public getUser(): Usuario {
    return this.user;
  }
  public setUserRegister(usr : Usuario){
    this.userRegister = usr;
  }
  constructor( private usrs: UsersDataService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  callBack() : void{
    this.usrs.getAll().subscribe(usuario => this.usuarios = usuario);
  }

  public ingresarAplicativo(obj: Usuario):boolean {
    // this.ingresar.map(obj.usuario == this.ingresar. && obj.password == '123');
    // this.usrs.getAll()
    // .subscribe(usuario => this.usuarios = usuario);
    console.log(this.usuarios.length);
    
    
    for (let index = 0; index < this.usuarios.length; index++) {
      if (this.usuarios[index].usuario === obj.usuario && this.usuarios[index].password === obj.password) {
        this.logueado = true;
        this.user = this.usuarios[index];
        this.setUserRegister(this.usuarios[index]);
        
        
        return true;
      }
    };
    
    this.logueado = false;
    return false;
    
  }
  // postForm(user : Usuario): void{
  //   this.usrs.post(user).subscribe(data =>{
  //     console.log(data);
  //   } )
  // }
  public registrarUsuario(obj:Usuario):void{
    for (let index = 0; index < this.usuarios.length; index++) {
      if (this.usuarios[index].usuario === obj.usuario) {
        alert("Ya existe este usuario")
        console.log(this.usuarios.length);
        return;
      }
    }
    // Transformation
    this.userRegister= {
      usuario: obj.usuario,
      password: obj.password,
      role: "null",
      imagenesFavs:[]
    }
    this.user = {
      usuario: obj.usuario,
      password: obj.password,
      role: "null",
      imagenesFavs: obj.imagenesFavs
    }
    
    this.usuarios.push(obj);
    console.log(this.usuarios.length);
    console.log(this.userRegister);
    
    this.usrs.post(this.userRegister).subscribe(valor => console.log(valor));
    this.logueado = true;
    this.habilitarLogueo();
  }

  public getUsuarios(){
    return this.usuarios;
  }

  public habilitarLogueo(){
    if(this.contador == 0){
      this.callBack();
      this.contador = 1;
    }
    return this.logueado;
  }

  public desHabilitarLogueo(){
    return this.logueado = false;
  }
  
}
