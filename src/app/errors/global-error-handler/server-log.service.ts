import { environment } from './../../../environments/environment';
import { ServerLog } from './server-log';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const serverLogUrl: string = environment.serverLogUrl;

@Injectable({
  providedIn: 'root'
})
export class ServerLogService {

  constructor(
    private http: HttpClient
  ) { }

  log(serverLog: ServerLog) {

    return this.http.post(`${serverLog}/infra/log`, serverLog);
  }
}
