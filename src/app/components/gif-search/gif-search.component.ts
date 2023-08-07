import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GiphyService } from '../../services/giphy.service';
import { SharedDataService } from '../../services/shared-data.service';


@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.css']
})
export class GifSearchComponent implements OnInit {
  searchText: string = '';
  searchResults: any[] = [];
  userGifs: any[] = [];
  isResultNotFound: boolean = false;

  constructor(private toastr: ToastrService, private giphyService: GiphyService, private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.loadUserGifs();
  }

  searchGifs() {
    if (!this.searchText) return;
    this.isResultNotFound = false;
    this.giphyService.searchGifs(this.searchText).subscribe((data: any) => {
      if (data.data.length === 0) {
        this.isResultNotFound = true;
      }
      this.loadUserGifs();
      this.searchResults = data.data.filter((gif: any) =>
        !this.userGifs.some((userGif) => userGif.url === gif.images.fixed_width.url)
      );
    });
  }

  addGifToUserStore(gif: any) {
    // Filter the gif from the search result.
    this.searchResults = this.searchResults.filter(item => item.id !== gif.id);

    const data = { name: gif.title, url: gif.images.fixed_width.url, dateAdded: new Date() };
    this.userGifs.push(data);
    this.toastr.success('GIF added to your store!');
    this.saveUserGifs();
    this.sharedDataService.updateData(data);
  }

  loadUserGifs() {
    const storedGifs = localStorage.getItem('userGifs');
    this.userGifs = storedGifs ? JSON.parse(storedGifs) : [];
  }

  saveUserGifs() {
    localStorage.setItem('userGifs', JSON.stringify(this.userGifs));
  }
}
