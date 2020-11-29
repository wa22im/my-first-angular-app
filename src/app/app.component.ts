import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'wess';

  constructor(){
    console.log(123)
  }

  changeName ( name :string ){
    
  }
}
