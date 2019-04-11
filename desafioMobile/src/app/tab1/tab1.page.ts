import { Component } from '@angular/core';
import { FirstTabService } from '../providers/first-tab.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  list = [];

  constructor(private ftService: FirstTabService, private alertCtrl: AlertController) {}

  public showReleases() {
    this.ftService.getReleases().subscribe(data => {
      data.forEach((element) => {
        console.log(element.created_at)
        let date = new Date(element.created_at);
        let newDate = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        element.created_at = newDate;
        this.list.push(element)
      });
      this.list = this.list.slice(0, 10);
    })
  }

  public cleanList() {
    this.list = [];
  }

  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: "Informações do App",
      message: "Criado por Marcus Felipe Novaes Silva, estudante de Engenharia de Bioprocessos na UNIFEI (Itajubá, MG).",
      buttons: [
        {
          text: "Ok",
          role: "cancel"
        }
      ]
    })
    await alert.present();
  }
}
