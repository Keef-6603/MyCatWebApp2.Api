import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components here
import { CatboxComponent } from './catbox/catbox.component';
import { AddEditCatboxComponent } from './catbox/add-edit-catbox/add-edit-catbox.component';
import { ShowCatboxComponent } from './catbox/show-catbox/show-catbox.component';
import { CatprofileComponent } from './catprofile/catprofile.component';
import { AddEditCatprofileComponent } from './catprofile/add-edit-catprofile/add-edit-catprofile.component';
import { ShowCatprofileComponent } from './catprofile/show-catprofile/show-catprofile.component';
// Define your routes here
const routes: Routes = [
  { path: 'catbox', component: CatboxComponent },
  { path: 'catbox/add', component: AddEditCatboxComponent },
  { path: 'catbox/edit/:id', component: AddEditCatboxComponent },
  { path: 'catbox/show/:id', component: ShowCatboxComponent },
  { path: 'catprofile', component: CatprofileComponent },
  { path: 'catprofile/add', component: AddEditCatprofileComponent },
  { path: 'catprofile/edit/:id', component: AddEditCatprofileComponent },
  { path: 'catprofile/show/:id', component: ShowCatprofileComponent },
  { path: '', redirectTo: '/catbox', pathMatch: 'full' }, // Redirect to catbox by default}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
