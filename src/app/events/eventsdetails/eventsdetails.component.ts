import { Component, OnInit } from '@angular/core';
import { EventService, Campaign } from '../event-service';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { calendarOutline, timeOutline, locationOutline, businessOutline, checkmarkCircle} from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  standalone: true,
  selector: 'app-eventsdetails',
  imports: [IonicModule, CommonModule],
  templateUrl: './eventsdetails.component.html',
  styleUrls: ['./eventsdetails.component.scss'],
})
export class EventsdetailsComponent  implements OnInit {
  EventDetails: Campaign = {
     id: 0,
      title: '',
      date: '', 
      startTime: '', // Chaîne vide pour l'heure de début
      endTime: '', // Chaîne vide pour l'heure de fin
      location: '', // Chaîne vide pour le lieu
      image: '', // Chaîne vide pour l'image
      organizer: '', // Chaîne vide pour l'organisateur
      description: '', // Chaîne vide pour la description
      eligibility: [], // Tableau vide pour les critères d'éligibilité
    };

  constructor( private eventService: EventService, private route: ActivatedRoute ) {
    addIcons({
      calendarOutline,
      timeOutline,
      locationOutline,
      businessOutline,
      checkmarkCircle
    });
   }

  ngOnInit() {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));
    const event = this.eventService.getById(eventId);
    if (event) {
      this.EventDetails = event;
    }
  }

}
