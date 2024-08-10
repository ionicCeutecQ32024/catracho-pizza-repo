
import { Component } from '@angular/core';
import { IonContent , IonCard, IonImg, IonButton, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonIcon} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { remove, addOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent , IonCard, IonImg, IonButton, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonIcon],
})
export class HomePage {
  constructor() {
    addIcons({ remove, addOutline });
  }
}
