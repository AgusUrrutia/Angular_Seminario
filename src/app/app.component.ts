import { Component } from '@angular/core';
import { AutentificacionService } from './shared/services/autentificacion.service';
import { UsersDataService } from './shared/services/users-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto_manejo_usuarios';

  constructor(private loginProv : AutentificacionService) { }


  public visualizarMenu(): boolean {
    return this.loginProv.habilitarLogueo();
  }
  
}
