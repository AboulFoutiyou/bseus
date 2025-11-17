import { Component, OnInit } from '@angular/core';
import { IonButton, IonContent, IonTitle, IonToolbar, IonHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  imports: [ IonButton, IonContent, IonTitle, IonToolbar, IonHeader ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
