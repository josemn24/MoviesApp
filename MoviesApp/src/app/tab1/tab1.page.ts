import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../components/details/details.component';
import { Movie, ResponseTMDB } from '../interfaces/Responses';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  popularMovies : Movie[] = [];

  constructor( private movieService: MovieService,
                private modalCtrl: ModalController ) {}

  ngOnInit() {

    this.movieService.getPopularMovies()
      .subscribe ( resp => {
        //console.log(resp);
        this.popularMovies = resp.results;
      } )

  }

  async showDetails(id : number) {

    const modal = await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps: {
        id
      }
    });
    
    modal.present();

  }

}
