import { TokenService } from './../token/token.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService) { }

  authenticate(userName: string, password: string): Observable<any> {

    return this.http
      .post(API_URL + '/user/login', { userName, password }, { observe: 'response'} )
      .pipe(tap(response => {
        const authToken = response.headers.get('x-access-token');
        this.tokenService.setToken(authToken);
      }))
  }
}
