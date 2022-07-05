import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AdoptionComponent } from './dynamic/adoption/adoption.component';
import { PetDetailsComponent } from './dynamic/pet-details/pet-details.component';
import { PetsListComponent } from './dynamic/pets-list/pets-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pets', component: PetsListComponent },
  { path: 'pets/:id', component: PetDetailsComponent },
  { path: 'adoption', component: AdoptionComponent },

  // { path: 'document/:documentId', component: DocumentDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
