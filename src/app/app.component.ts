import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  public rooms: number = 1;
  public adult: number = 1;
  public children: number = 0;




  constructor() { }

  ngOnInit() {
  }
public roomsInc() {
 if (this.rooms >= 4) {
   this.rooms = 4;
 } else {
   this.rooms++;
   this.adult++;
 }
}
public roomsDec() {
  if ( this.rooms <= 1 ) {
    this.rooms = 1;
  } else {
    this.rooms--;
    if (this.rooms*4 <= this.adult){
      this.adult = this.rooms*4;
    } else {
      this.adult--;
    }
  }
}
public adultInc() {
  if ( this.rooms * 4 <= this.adult ) {
    this.adult = this.adult;
  } else {
    this.adult++;
  }
}
public adultDec() {
  
  this.adult--;
}
public childInc() {
  if (this.rooms * 4 >= this.adult + this.children) {
    this.children++;
  } else {
    this.children--;
  }
  
}
public childDec() {
  this.children--;

}
}
