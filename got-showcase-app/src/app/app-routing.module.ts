import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseListComponent } from './components/house-list/house-list.component';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'houses', component: HouseListComponent },
  { path: 'house-detail/:id', component: HouseDetailComponent },
  { path: '', redirectTo: '/houses', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
