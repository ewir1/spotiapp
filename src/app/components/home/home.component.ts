import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  trackList: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private spotifyService: SpotifyService ) {

    this.loading = true;
    this.error = false;

    this.spotifyService.getNewReleases()
        .subscribe( (data: any) => {
          console.log( data );
          this.nuevasCanciones = data;
          this.loading = false;
        }, (errorServicio) => {
          this.loading = false;
          this.error = true;
          console.log(errorServicio);
          // console.log(errorServicio.error.error.message);
          this.mensajeError = errorServicio.error.error.message;
        });


    this.spotifyService.getTracks()
        .subscribe( (data: any) => {
          console.log(data);
          this.trackList = data;
        });

  }



  ngOnInit() {
  }

}
