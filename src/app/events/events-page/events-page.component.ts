import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { } from '@ionic/angular/standalone';
import {chevronForwardOutline} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import {IonContent, IonToolbar, IonButton, IonIcon, IonHeader, IonTitle } from '@ionic/angular/standalone';
import { EventService, Campaign } from '../../events/event-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-events-page',
  imports: [ IonButton, IonContent, IonToolbar, IonIcon, IonHeader, IonTitle, CommonModule ],
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss'],
})
export class EventsPageComponent  implements OnInit {

  constructor( private eventService: EventService, private router: Router ) {
    addIcons({
      chevronForwardOutline
    });
   }

  campaigns: Campaign[] = [];

  ngOnInit() {
    this.campaigns = this.eventService.getAll();
  }

  goToDetails(campaignId: number) {
    // Utilise la méthode navigate de Router pour aller au chemin spécifié
    this.router.navigate(['/events/details', campaignId]);
  }

}
