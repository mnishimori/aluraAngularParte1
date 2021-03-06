import { ServerLogService } from './server-log.service';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserService } from 'src/app/core/user/user.service';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import * as StackTrace from 'stacktrace-js';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(
    private injector: Injector
  ) {}

  handleError(error: any): void {
    console.log('Passei pelo handler');

    const location = this.injector.get(LocationStrategy);
    const userService = this.injector.get(UserService);
    const serverLogService = this.injector.get(ServerLogService);

    const url = location instanceof PathLocationStrategy ? location.path() : '';
    const message = error.message ? error.message : error.toString();

    StackTrace
      .fromError(error)
      .then(stackFrames => {
        const stackAsString = stackFrames
          .map(sf => sf.toString())
          .join('\n');

        console.log('message ' + message);

        console.log('stackAsString ' + stackAsString);

        console.log({message, url, userName: userService.getUserName(), stack: stackAsString});

        serverLogService.log({message, url, userName: userService.getUserName(), stack: stackAsString})
          .subscribe(() => console.log('Error logged on server')),
          err => {
            console.log(err);
            console.log('Fail to send error log to server');
          }
      })
  }

}
