import { Component, OnInit } from '@angular/core';

@Component({
  // selector por atributo
  // selector: '[app-servers]',
  // selector por clase
  // selector: '.app-servers',
  selector: 'app-servers',
  template: `<app-server></app-server>
    <app-server></app-server>`,
  // templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
