import { Photo } from './photo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  listFromUser(userName: string): Observable<Photo[]>{
    return this.http.get<Photo[]>(`http://localhost:3000/${userName}/photos`).pipe();
  }
}