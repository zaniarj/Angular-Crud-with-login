import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

const baseUrl = 'https://smooth-comfort-405104.uc.r.appspot.com/document';
const httpHeaders: HttpHeaders = new HttpHeaders({
  Authorization: 'API KEY '});

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<Tutorial[]>(`${baseUrl}/findAll/products`, { headers: httpHeaders });
  }
  //Tutorial[]

  get(id: any): Observable<any> {
    return this.http.get<Tutorial>(`${baseUrl}/findOne/products/${id}`, { headers: httpHeaders });
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/createorupdate/products`, data, { headers: httpHeaders });
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/updateOne/products/${id}`, data, { headers: httpHeaders });
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/deleteOne/products/${id}`, { headers: httpHeaders });
  }

}
