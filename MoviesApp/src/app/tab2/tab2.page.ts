import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../components/details/details.component';
import { Movie } from '../interfaces/Responses';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchedText = '';
  searching = false;
  movies: Movie[] = [];
  ideas: string[] = ['Spiderman', 'Interstellar', 'El señor de los anillos', 'La vida es bella'];

  constructor( private movieService: MovieService,
               private modalCtrl: ModalController) { }

  buscar( event ) {
    const value: string = event.detail.value;

    if ( value.length === 0 ) {
      this.searching = false;
      this.movies = [];
      return;
    }

    this.searching = true;

    this.movieService.searchMovies( value )
        .subscribe( resp => {
          //console.log( resp );
          this.movies = resp['results'];
          this.searching = false;
        });
  }

  async details( id: number ) {

    const modal = await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps: {
        id
      }
    });

    modal.present();

  }

}