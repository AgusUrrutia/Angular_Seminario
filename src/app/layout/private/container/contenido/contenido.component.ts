import { Component, OnInit } from '@angular/core';
import { Imagen } from 'src/app/shared/imagen';
import { AutentificacionService } from 'src/app/shared/services/autentificacion.service';
import { ImagesDataService } from 'src/app/shared/services/images-data.service';



@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  public corazon1 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAyMS41OTNjLTUuNjMtNS41MzktMTEtMTAuMjk3LTExLTE0LjQwMiAwLTMuNzkxIDMuMDY4LTUuMTkxIDUuMjgxLTUuMTkxIDEuMzEyIDAgNC4xNTEuNTAxIDUuNzE5IDQuNDU3IDEuNTktMy45NjggNC40NjQtNC40NDcgNS43MjYtNC40NDcgMi41NCAwIDUuMjc0IDEuNjIxIDUuMjc0IDUuMTgxIDAgNC4wNjktNS4xMzYgOC42MjUtMTEgMTQuNDAybTUuNzI2LTIwLjU4M2MtMi4yMDMgMC00LjQ0NiAxLjA0Mi01LjcyNiAzLjIzOC0xLjI4NS0yLjIwNi0zLjUyMi0zLjI0OC01LjcxOS0zLjI0OC0zLjE4MyAwLTYuMjgxIDIuMTg3LTYuMjgxIDYuMTkxIDAgNC42NjEgNS41NzEgOS40MjkgMTIgMTUuODA5IDYuNDMtNi4zOCAxMi0xMS4xNDggMTItMTUuODA5IDAtNC4wMTEtMy4wOTUtNi4xODEtNi4yNzQtNi4xODEiLz48L3N2Zz4=";
  public corazon2 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgNC4yNDhjLTMuMTQ4LTUuNDAyLTEyLTMuODI1LTEyIDIuOTQ0IDAgNC42NjEgNS41NzEgOS40MjcgMTIgMTUuODA4IDYuNDMtNi4zODEgMTItMTEuMTQ3IDEyLTE1LjgwOCAwLTYuNzkyLTguODc1LTguMzA2LTEyLTIuOTQ0eiIvPjwvc3ZnPg=="
  constructor(private imgs: ImagesDataService, private loginProv : AutentificacionService) { }
  public imagenes: Imagen[] = [];
  public imagenesFavs: Imagen[] = [];

  public isFav(imagen : Imagen): boolean {
    
    for (let index = 0; index < this.imagenesFavs.length; index++) {
      if(this.imagenesFavs[index].id == imagen.id){
        console.log("Es favorita");
        console.log(imagen.id);
        
        return true;
        
      }
    }
    return false;
  }

  public makeFav(imagen : Imagen): void{
    console.log(imagen);
    
    
      if (this.isFav(imagen)) {
        for (let index = 0; index < this.imagenesFavs.length; index++) {
          if (imagen.id == this.imagenesFavs[index].id) {
              this.imagenesFavs.slice(index);
              console.log("quitado de la lista");
              return;
          }
        }
      }else{
        this.imagenesFavs.push({
          id : imagen.id,
          url : imagen.url
        });
        console.log("ingresado a la lista");
        console.log(this.loginProv.user.imagenesFavs.length);
      }
    this.loginProv.user.imagenesFavs = this.imagenesFavs;
  }

  ngOnInit(): void {
    this.imgs.getAll().subscribe(images => this.imagenes = images);
    console.log(this.imagenes);
  }

}
