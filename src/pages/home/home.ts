import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { PhotosPage } from '../photos/photos';
import { ProfilePage } from '../profile/profile';
import { TakePicturePage } from '../take-picture/take-picture';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public photosTab: any;
  public profileTab: any;

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) {
    this.photosTab = PhotosPage;
    this.profileTab = ProfilePage;
  }

  showSendPhotos() {
    this.modalCtrl.create(TakePicturePage)
        .present();
  }
}