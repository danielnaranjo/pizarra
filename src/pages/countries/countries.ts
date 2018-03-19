import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-country',
  templateUrl: 'countries.html'
})
export class CountryPage {

    data: any;
      constructor(public navCtrl: NavController, public modalCtrl: ModalController, public http: Http) {

      this.http.get('https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json')
          .map(res => res.json()).subscribe(data => {
              this.data = data.teams;
              console.log('data', this.data);
          });

  }

}
