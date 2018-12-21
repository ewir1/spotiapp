import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify Service Listo');
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDfn7rQMRxBqGWgOtmn0ecuWDaqakNhclz7O17tKOsuxlNZTkOQCC7Ft-2a9fwAgg0uJycYGYyvutMQqSE'
    });

    return this.http.get(url, {headers});

  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
               .pipe(map(data => data['albums'].items));
  }

  getArtistas( termino: string ) {

    return this.getQuery(`search?q=${termino }&type=artist&limit=15`)
               .pipe( map( data =>  data['artists'].items));

  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
      // .pipe(map(data => data['artists'].items));
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
               .pipe( map( data => data['tracks']) );
  }

  getImageBg( id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTracks() {
    return this.getQuery(`tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B&market=ES`)
               .pipe( map( data =>  data['tracks']) );
  }

}
