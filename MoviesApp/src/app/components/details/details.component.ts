import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cast, MovieDetails } from 'src/app/interfaces/Responses';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  @Input() id;

  movie: MovieDetails = {};

  actors: Cast[] = [];

  constructor( private moviesService: MovieService,
              private modalCtrl: ModalController ) { }

  ngOnInit() {

    this.moviesService.getMovieDetails( this.id )
      .subscribe( resp => {
        this.movie = resp;
      });

    this.moviesService.getMovieActors( this.id )
      .subscribe( resp => {
        this.actors = resp.cast;
        console.log(this.actors);
      });

  }

  back() {
    this.modalCtrl.dismiss();
  }

}
