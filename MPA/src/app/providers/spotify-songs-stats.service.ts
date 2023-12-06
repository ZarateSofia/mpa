import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifySongsStatsService {
  private URL: string = 'https://pruebaspotify-dd602-default-rtdb.firebaseio.com/.json';


  constructor(private http:HttpClient) { }

  getResponse() {
    return this.http.get(this.URL);
  }
}
