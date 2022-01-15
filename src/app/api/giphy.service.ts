import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private host: string = "https://api.giphy.com";
  constructor(private http: HttpClient) { }

  public async searchGifs(query: string){
    return this.http.get(`${this.host}/v1/gifs/search?api_key=${environment.giphy_api_key}&q=${query}&limit=20`).toPromise();
  }
}
