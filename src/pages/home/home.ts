import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  //https://stackblitz.com/edit/angular-9zh9dk
  countDown;
  counter = 60 * 24 * 1000;
  tick = 1000;
  ngOnInit() {
    this.countDown = Observable.timer(0, this.tick)
      .take(this.counter)
      .map(() => --this.counter)
  }

  constructor(public navCtrl: NavController) {

  }

}