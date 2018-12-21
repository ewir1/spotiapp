import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any[] = [];
  bgImage: any[] = [];
  loading: boolean;
  images: string;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe( params => {
      // console.log(params['id']);
      this.loading = true;
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
      this.getImageBg(params['id']);
    });
  }

  getArtista( id: string ) {
    this.spotify.getArtista( id )
        .subscribe( artista => {
          console.log(artista);
          this.artista = artista;
          this.loading = false;
        });
  }

  getTopTracks( id: string ) {
    this.spotify.getTopTracks( id )
        .subscribe( topTracks => {
          console.log(topTracks);
          this.topTracks = topTracks;
        });
  }

  getImageBg( id: string ) {
    this.spotify.getImageBg(id)
        .subscribe( (bgImage: any) => {
          this.bgImage = bgImage.images[0].url;
        });
  }

}
