import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
const URL = "https://6357cec82712d01e14104b63.mockapi.io/imagenes";
@Injectable({
  providedIn: 'root'
})
export class ImagesDataService {

  constructor(private http: HttpClient) { }
  public getAll() : Observable<any[]> {
    return this.http.get<any[]>(URL);
  }
}
