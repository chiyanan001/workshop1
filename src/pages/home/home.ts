import { MyPage } from '../../pages/mypage/mypage';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoMypage() {
    this.navCtrl.push (MyPage);
  }
}






