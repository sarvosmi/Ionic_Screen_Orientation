import { Component } from '@angular/core';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currentOrientation:any
  orientationUpdate:string="";

  constructor(private screenOrientation: ScreenOrientation) {

    //console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'
    this.currentOrientation=this.screenOrientation.type;

    // detect orientation changes
    this.screenOrientation.onChange().subscribe(
      () => {

          this.orientationUpdate="Orientation Change " ;
          //console.log("Orientation Changed");
      }
    );
  }

  setLandscape()
  {
    // set to landscape
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

  }
  setPortrait()
  {
    // set to landscape
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

  }

  unlockOrientation()
  {
    // allow user rotate
      this.screenOrientation.unlock();
  }
}
