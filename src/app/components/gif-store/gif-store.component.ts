import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-gif-store',
  templateUrl: './gif-store.component.html',
  styleUrls: ['./gif-store.component.css']
})
export class GifStoreComponent implements OnInit {
  userGifs: any[] = [];
  searchName: string = '';
  isResultNotFound: boolean = false;

  constructor(private toastr: ToastrService, private http: HttpClient, private sharedDataService: SharedDataService) {
  }

  ngOnInit() {
    this.sharedDataService.data$.subscribe((data) => {
      this.userGifs.push(data);
      this.userGifs.sort((a, b) => Date.parse(b.dateAdded) - Date.parse(a.dateAdded));
    });

    this.loadUserGifs();
  }

  loadUserGifs() {
    const storedGifs = localStorage.getItem('userGifs');
    this.userGifs = storedGifs ? JSON.parse(storedGifs) : [];
    this.userGifs.sort((a, b) => Date.parse(b.dateAdded) - Date.parse(a.dateAdded));
  }

  removeGif(index: number) {
    const response = confirm("Are you sure you want to remove this gif?");
    if (response) {
      this.userGifs.splice(index, 1);
      this.toastr.success('GIF removed from your store!');
      this.saveUserGifs();
    }
  }

  searchGifs(): void {
    this.loadUserGifs();
    if (this.searchName) {
      this.isResultNotFound = false;
      this.userGifs = this.userGifs.filter((item) =>
        item.name.toLowerCase().includes(this.searchName.toLowerCase())
      );
      if(this.userGifs.length === 0){
        this.isResultNotFound = true;
      } 
    }
  }
  
  downloadGif(gif: any) {
    this.http.get(gif.url, { responseType: 'blob' }).subscribe((blob: Blob) => {
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = `${gif.name}.gif`;
      anchor.click();
      window.URL.revokeObjectURL(url);
    });
  }

  saveUserGifs() {
    localStorage.setItem('userGifs', JSON.stringify(this.userGifs));
  }

  clearData(): void {
    this.searchName = '';
    this.loadUserGifs();
  }
}
