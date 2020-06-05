import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {
  username = 'Enter your username.';
  btnResetUsername = false;

  resetUsername() {
    this.username = 'Enter your username.'
  }

  onUpdateServerName(event: any) {
    if((<HTMLInputElement>event.target).value.length > 0) {
      this.btnResetUsername = false;
    } else {
      this.btnResetUsername = true;
    }
  }
}
