import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MovieDetails } from 'src/app/interfaces/Responses';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  @Input() id;

  movie: MovieDetails = {};

  constructor( private moviesService: MovieService,
              private modalCtrl: ModalController ) { }

  ngOnInit() {

    this.moviesService.getMovieDetails( this.id )
      .subscribe( resp => {
        this.movie = resp;
      } )

  }

  back() {
    this.modalCtrl.dismiss();
  }

}
