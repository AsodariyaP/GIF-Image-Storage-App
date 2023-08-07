import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient) { }

  searchGifs(searchText: string): Observable<any> {
    const apiKey = 'ZQ7serDfQd8nkg3aZYkHooUasj69dq45';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchText}&limit=10`;
    return this.http.get(url);
  }
}
