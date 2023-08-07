import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { GifSearchComponent } from './components/gif-search/gif-search.component';
import { GifStoreComponent } from './components/gif-store/gif-store.component';

@NgModule({
  declarations: [
    AppComponent,
    GifSearchComponent,
    GifStoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({ positionClass: 'toast-top-right', preventDuplicates: true }),
    DragulaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
