import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookStoreService } from './shared/book-store.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { SearchComponent } from './search/search.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  imports: [BrowserModule, FormsModule,AppRoutingModule, HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  declarations: [AppComponent, BookListComponent, BookListItemComponent, BookDetailsComponent, HomeComponent, SearchComponent],
  bootstrap: [AppComponent],
  providers: [BookStoreService]
})
export class AppModule {}
