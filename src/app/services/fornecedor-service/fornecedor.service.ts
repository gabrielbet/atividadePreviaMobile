import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FornecedorModel } from '../../models/fornecedorModel';
import { SpinnerService } from '../spinner-service/spinner.service';

@Injectable({
  providedIn: 'root',
})
export class FornecedorService {
  url = 'http://localhost:3000/fornecedores';
  constructor(private http: HttpClient, private spinnerSrvc: SpinnerService) {}

  public getFornecedor(): Observable<FornecedorModel[]> {
    this.spinnerSrvc.show();
    return this.http.get<FornecedorModel[]>(this.url);
  }
  public createFornecedor(data): Observable<any> {
    this.spinnerSrvc.show();
    return this.http.post(this.url, data);
  }
  public deleteFornecedor(id): Observable<any> {
    this.spinnerSrvc.show();
    return this.http.delete(`${this.url}/${id}`);
  }
  public updateFornecedor(data): Observable<FornecedorModel> {
    this.spinnerSrvc.show();
    return this.http.put<FornecedorModel>(`${this.url}/${data.id}`, data);
  }
}
