import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-stadium',
  templateUrl: 'stadium.html',
  //styleUrls: ['stadium.css']
})
export class StadiumPage {

data: any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public http: Http) {

      this.http.get('https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json')
          .map(res => res.json()).subscribe(data => {
              this.data = data.stadiums;
              console.log('data', this.data);
          });
  }

  ver(id) {
      console.log('ver', 'stadium', id); // env, expensas, 1
      // this.navCtrl.push('DetallesPage', {
      //   id: id
      // });
    }

}
