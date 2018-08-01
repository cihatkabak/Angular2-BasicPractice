import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:'<button>Tıkla</button><h1>{{deger}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  

  constructor()
  {
    
  }
}
