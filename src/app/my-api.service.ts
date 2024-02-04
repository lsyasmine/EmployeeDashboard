import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  private apiUrl = 'https://retoolapi.dev/HYd96h/data';
  constructor(private http: HttpClient) { }

    // Définir une méthode pour effectuer la requête GET
    getUsers(): Observable<any> {
      return this.http.get<any>(this.apiUrl);
    }
}
