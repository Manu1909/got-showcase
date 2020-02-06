import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HouseOverviewComponent } from './components/house-overview/house-overview.component';
import { HouseListComponent } from './components/house-list/house-list.component';


const routes: Routes = [
  { path: 'houses', component: HouseOverviewComponent },
  { path: 'house-list', component: HouseListComponent},
  { path: 'house-detail/:id', component: HouseDetailComponent },
  { path: '', redirectTo: '/houses', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
