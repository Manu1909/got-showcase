import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './pipes/search.pipe';
import { HouseOverviewComponent } from './components/house-overview/house-overview.component';
import { HouseListComponent } from './components/house-list/house-list.component';
import { HouseCardComponent } from './components/house-card/house-card.component';
import { LoadingContainerComponent } from './components/loading-container/loading-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HouseDetailComponent,
    PageNotFoundComponent,
    SearchPipe,
    HouseOverviewComponent,
    HouseListComponent,
    HouseCardComponent,
    LoadingContainerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
