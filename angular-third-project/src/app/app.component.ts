import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private svc: TestService, private httpClient: HttpClient) {
    svc.printToConsole("Got the service!");
  }

  ngOnInit() : void {
    // this is async operation so we get response over observer...
    let resultObserver = this.httpClient.get('https://api.github.com/users/koushikkothagal');
    // subscribe observer method ("callback")
    resultObserver.subscribe((response) => this.responseHandler(response));
  }

  responseHandler(response: any): void {
    () => console.log('Got the response');
  }

}
