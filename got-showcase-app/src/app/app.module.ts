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
import { MainHouseListComponent } from './components/main-house-list/main-house-list.component';
import { SmallHouseListComponent } from './components/small-house-list/small-house-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HouseDetailComponent,
    PageNotFoundComponent,
    SearchPipe,
    HouseOverviewComponent,
    MainHouseListComponent,
    SmallHouseListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
