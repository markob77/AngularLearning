import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
  printToConsole(arg: any) : void {
    console.log(arg);
  }

}
