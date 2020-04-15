import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  a=""
  b=""
  hasil = 0;
  theHtmlString=""
  polaB = "PolaB<br>***<br>****<br>*****<br>******<br>*******<br>********<br>";
  polaA ="Pola A<br>*****o<br>****oo<br>***ooo<br>**<br>*<br>";
  calculate(){
    this.hasil = Math.pow(parseInt(this.a), parseInt(this.b));
    if(this.hasil%2==0){
       this.theHtmlString=this.polaB;
    }
    else{
      this.theHtmlString=this.polaA;
    }
  }
  
}
