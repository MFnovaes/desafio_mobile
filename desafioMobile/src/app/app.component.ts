import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DesafioMobileService } from './providers/desafio-mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private sqlite: DesafioMobileService
  ) {
    
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.sqlite.createDB();
      console.log("Eita")
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
