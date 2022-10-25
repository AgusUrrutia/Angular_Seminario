import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutentificacionService } from 'src/app/shared/services/autentificacion.service';
import { UsersDataService } from 'src/app/shared/services/users-data.service';
import { Usuario } from 'src/app/shared/services/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  
 
  public myForm!: FormGroup;
  



  constructor(
    private fb: FormBuilder, 
    private loginProv : AutentificacionService) {}
  usuarios : Usuario[] = [];

  ngOnInit(): void {
    this.myForm = this.createMyForm();
    
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

      // Transformation


    // alert('se envio el formulario');
    // console.log(this.myForm.value);

    this.loginProv.registrarUsuario(this.myForm.value);
    
  }
  public visualizarMenu(): boolean {
    return this.loginProv.habilitarLogueo();
  }

  public get f(): any{
    return this.myForm.controls;
  }

}
