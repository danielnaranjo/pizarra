import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
//import 'rxjs/add/operator/map';
//import { Http } from '@angular/http';

@Component({
  selector: 'page-group',
  templateUrl: 'group.html'
})
export class GroupPage {

  //ga: Array<0>;
  //seleccion_a: any;
  data: any;

//, public http: Http
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    /*
    this.ga = this.ga;
    this.seleccion_a = 1;

    this.http.get('https://app.tuconsorcio.com.ar/api/v2/alertas/12')
      .map(res => res.json()).subscribe(data => {
        this.data = data.results;
        console.log('data', this.data);
      });
*/
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
