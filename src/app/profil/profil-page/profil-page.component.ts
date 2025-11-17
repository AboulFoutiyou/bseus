import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonIcon, IonItem, IonInput, IonLabel, IonList, IonButtons } from '@ionic/angular/standalone';
import { NgModel, FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { pencilOutline} from 'ionicons/icons';

@Component({
  selector: 'app-profil-page',
  imports: [
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
    IonItem,
    IonLabel,
    IonInput,
    IonList,
    IonButtons
  ],
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.scss'],
})
export class ProfilPageComponent  implements OnInit {
  user = {
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNwoo-PdcyyBxVsSA5Ewbt99uEdA1siSeNghEWfJDUAts7FViF2q6D3lvlqlvzRMQrXPnt8rnspMnRfZPiSI1P5rzhRGSWqcfaiD2hw406i8sCKQAOtzs6F09MrXKtkzLzltu_FI68chPTSknv_y3iU-uGMwBEGXVPrs6P7bMm3CKxCa4HgMLqQzDVush_WhwMLExOQrVOGkqnG7QjxG-X2JD_FoKnXFPZze1CgNcOT5XfI-h1h7GsJfSc11Yt3Vyvsg7Es6HIDmQ",
    fullName: "Mamadou Diop",
    bloodType: "O+",
    lastDonation: "2 months ago",
    address: "123 Rue de Dakar",
    region: "Dakar",
    phone: "+221 77 123 45 67"
  };

  constructor() {
    addIcons({
      pencilOutline
    });
   }

  ngOnInit() {}

}
