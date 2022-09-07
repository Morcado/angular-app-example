import { Component, OnInit } from '@angular/core';

@Component({
  // selector por atributo
  // selector: '[app-servers]',
  // selector por clase
  // selector: '.app-servers',
  selector: 'app-servers',

  // template: `<app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer : boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'Test server';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
    console.log(event);
  }

  ngOnInit(): void {
  }

}
