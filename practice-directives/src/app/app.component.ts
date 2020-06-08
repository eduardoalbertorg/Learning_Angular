import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hideSecretToLife = true;
  secretToLifeConsults = [];
  consultArrays = [];

  changeSecretToLifeVisibility() {
    this.hideSecretToLife = !this.hideSecretToLife;
    this.secretToLifeConsults.push(new Date());
    this.consultArrays.push(this.consultArrays.length + 1);
  }

  getColor() {
    return this.secretToLifeConsults.length > 4 ? 'dodgerblue' : 'white';
  }

}
