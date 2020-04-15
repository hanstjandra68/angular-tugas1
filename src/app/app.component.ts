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
  theHtmlString="";
  polaB = "";
  polaA ="";
  calculate(){
    this.hasil = Math.pow(parseInt(this.a), parseInt(this.b));
    if(this.hasil%2==0){
       this.polaB=this.polaB.concat('Pola B <br>');
       for (let i = 3; i <= this.hasil; i++) {
          for(let j=0;j<i;j++){
            this.polaB=this.polaB.concat('*');
          }
          this.polaB=this.polaB.concat('<br>');
       }
       this.theHtmlString=this.polaB;
       this.polaB="";
    }
    else{
      this.polaA=this.polaA.concat('Pola A <br>');
       for (let i = 0; i <= parseInt(this.b); i++) {
          for(let j=parseInt(this.b);j>i;j--){
            this.polaA=this.polaA.concat('*');
          }
          for(let k=0;k<=i;k++){
            if(i<parseInt(this.a)){
              this.polaA=this.polaA.concat('o');
            }
            else{
              this.a="";
            }
          }
          this.polaA=this.polaA.concat('<br>');
       }
       this.theHtmlString=this.polaA;
       this.polaA="";
    }
  }
}