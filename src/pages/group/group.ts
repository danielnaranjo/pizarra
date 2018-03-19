import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-group',
  templateUrl: 'group.html'
})
export class GroupPage {


  data: any;

    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public http: Http, public toastCtrl: ToastController) {

    this.http.get('https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json')
        .map(res => res.json()).subscribe(data => {
            this.data = data.groups.a.matches;
            console.log('data', this.data);
        });

  }

  seleccionado(grupo, equipo) {
    let toast = this.toastCtrl.create({
      message: 'Ganador ' + equipo + ' Equipo ' + equipo,
      duration: 5000
    });
    toast.present();
    //this.seleccion_a.add({ 'equipo': equipo, 'posicion':posicion});
    //this.ga[0] = equipo;
  }

}
