import { Component, OnInit } from '@angular/core';
import { IonLabel, IonTabBar, IonTabButton, IonIcon, IonRouterOutlet, IonTabs } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, calendarOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-footer',
  imports: [ IonLabel, IonTabBar, IonTabButton, IonIcon, IonRouterOutlet , IonTabs ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  constructor() { 
    addIcons({
      homeOutline,
      calendarOutline,
      personOutline
    });
  }

  ngOnInit() {}

}
