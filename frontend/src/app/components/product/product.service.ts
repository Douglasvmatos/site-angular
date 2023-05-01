import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar'
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, catchError, map } from "rxjs";
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = '/api/products'

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(product: Product): Observable<any> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError(e => this.handleError(e))
    )
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.handleError(e))
    )
  }

  readById(id:number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError(e => this.handleError(e))
    )
  }

  getItem(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError(e => this.handleError(e))
    );
  }

  obterPorId(id:number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url).pipe(
      map((obj) => obj),
      catchError(e => this.handleError(e))
    )
  }

  update(product: Product): Observable<any> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError(e => this.handleError(e))
    )
  }

  deleteItem(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError(e => this.handleError(e))
    );
  }

  

  handleError(e: any): Observable<any> {
    this.showMessage('Unexpected error', true)
    return EMPTY
  }

}
