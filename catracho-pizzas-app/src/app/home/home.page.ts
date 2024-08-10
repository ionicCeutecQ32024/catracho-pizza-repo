
import { Component } from '@angular/core';
import { IonContent , IonCard, IonImg, IonButton, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonIcon} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { remove, addOutline, cartOutline } from 'ionicons/icons';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent , IonCard, IonImg, IonButton, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonIcon],
})

export class HomePage {
  
  piz_cantidad: number
  tittle:string=''

  constructor(private AlertController:AlertController) {
    
    this.piz_cantidad=1
    
    addIcons({ remove, addOutline,cartOutline });
  }
  
  handlerAdd(){
    this.piz_cantidad+=1
  }

  handlerRem(){
    if(this.piz_cantidad>1)
    this.piz_cantidad-=1
  }

  async AlertOrdenar(){
    
    const alert= await this.AlertController.create(
    {
      header:'ORDEN DE COMIDA',
      message: `Ha agregado correctamente ${this.piz_cantidad} pizza(s) a su carrito`,
      buttons:['Aceptar']
    }
  )  
  
  await alert.present()
  }
}
