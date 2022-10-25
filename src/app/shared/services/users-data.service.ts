import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from './usuario';

const URL = "https://6357cec82712d01e14104b63.mockapi.io/users";
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http: HttpClient) { }
  public getAll() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>(URL);
  }

  public post(obj : Usuario) : Observable<Usuario>{
    console.log(obj);
    return this.http.post<Usuario>(URL, obj);
  }

}
