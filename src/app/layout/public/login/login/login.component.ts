import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutentificacionService } from 'src/app/shared/services/autentificacion.service';
import { UsersDataService } from 'src/app/shared/services/users-data.service';
import { Usuario } from 'src/app/shared/services/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm!: FormGroup;



  constructor(
    private fb: FormBuilder, 
    private loginProv : AutentificacionService, 
    private usrs : UsersDataService) {}
  usuarios : Usuario[] = [];

  ngOnInit(): void {
    this.myForm = this.createMyForm();
    this.usrs.getAll()
    .subscribe(usuario => this.usuarios = usuario);
  }

  private createMyForm(): FormGroup{
    return this.fb.group({
      usuario:["",[Validators.required]],
      password:["",[Validators.required]]
    });
  }

  public sumbitFormulario(){
    if (this.myForm.invalid) {
      Object.values(this.myForm.controls).forEach(control =>{
        control.markAllAsTouched();
      });
      return;
    }

      console.log(this.myForm.value);
    // alert('se envio el formulario');
    // console.log(this.myForm.value);
    
    if(!this.loginProv.ingresarAplicativo(this.myForm.value)){
      alert('Usuario o Contraseña invalido');
    }
  }
  public visualizarMenu(): boolean {
    return this.loginProv.habilitarLogueo();
  }

  public get f(): any{
    return this.myForm.controls;
  }


}