import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';
import { VeiculosAPI,Veiculos} from '../models/veiculo.model';
import { CarByVin } from '../models/carbyvin.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private apiUrl = 'http://localhost:3001';

  constructor(private readonly http: HttpClient) {}

  login(nome: string, senha: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/login`, { nome, senha });
  }

  getVehicles(): Observable<Veiculos>{
    return this.http.get<VeiculosAPI>(`${this.apiUrl}/vehicles`).pipe(map((res)=> res.vehicles));
  }

  checkVinCode(vin:string): Observable<CarByVin>{
    return this.http.get<CarByVin>(`${this.apiUrl}/vehicles/${vin}`)
  }

  post(endpoint: string, body: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${endpoint}`, body);
  }

}
