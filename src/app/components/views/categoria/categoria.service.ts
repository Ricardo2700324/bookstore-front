import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria.model';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  finAll():Observable<Categoria[]>{
    const url =`${this.baseUrl}/categorias`
    return this.http.get<Categoria[]>(url);
  }

  findById(id: String): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias/${id}`
    return this.http.get<Categoria>(url);
  }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}/categorias/${id}`
    return this.http.delete<void>(url)
  }

  create(categoria: Categoria): Observable<Categoria>{
    const url = `${this.baseUrl}/categorias`
    return this.http.post<Categoria>(url, categoria);
  }

  update(categoria: Categoria): Observable<void>{
    const url = `${this.baseUrl}/categorias/${categoria.id}`;
    return this.http.put<void>(url, categoria);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
