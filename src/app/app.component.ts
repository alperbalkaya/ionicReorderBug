import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  _configurationsList = [
    {
      id: "123456789",
      name: "Test configuration 1",
      created: new Date(),
      index: 0
    },
    {
      id: "123456788",
      name: "Test configuration 2",
      created: new Date(),
      index: 1
    },
    {
      id: "123456787",
      name: "Test configuration 3",
      created: new Date(),
      index: 2
    }
  ]

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  private reorderConfigurationsList(ev) {
    const itemToMove = this._configurationsList.splice(ev.detail.from, 1 ) [0];
    this._configurationsList.splice(ev.detail.to, 0, itemToMove );
    ev.detail.complete();
  }

}
