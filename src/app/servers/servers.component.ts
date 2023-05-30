import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  allowNewUser = false;
  serverCreated = false;
  serverCreationStatus = '';
  serverName = '';
  servers = ['testserver', 'testserver 2'];

  userName = '';
  nameCreationStatus = 'no user was created';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.nameCreationStatus = this.serverName
      ? 'Server was created. Server name is ' + this.serverName
      : 'Server was created. Server name is empty.';
  }

  onCreateUser() {
    this.nameCreationStatus = 'user was created' + ' ' + this.userName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  showSecret = false;
  log = [];
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);

    this.log.push(new Date());
  }
}
