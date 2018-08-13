import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

interface CardInterface {
  name: string;
  location: string;
  day: string;
  month: string;
  year: string;
  img: string;
}


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
  
  private cards: CardInterface[] = [
    {
      name: 'Innovation Showcase 2017',
      location: 'Canberra Fitters Workshop',
      day: '7',
      month: 'DEC',
      year: '2017',
      img: 'innovation-showcase.png'
    },
    {
      name: 'Heritage Tours',
      location: 'Canberra Glassworks',
      day: '25',
      month: 'NOV',
      year: '2017',
      img: 'heritage-tours.png'
    },
    {
      name: 'Summer Sensations',
      location: 'Canberra Glassworks',
      day: '10',
      month: 'JAN',
      year: '2018',
      img: 'summer-sensations.png'
    },
    {
      name: 'Renewable Energy Day 2017',
      location: 'Visit renewable energy sites throughout the ACT',
      day: '25',
      month: 'NOV',
      year: '2017',
      img: 'renewable-energy-day.png'
    }
  ];

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
}
