import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatboxComponent } from './catbox/catbox.component';
import { AddEditCatboxComponent } from './catbox/add-edit-catbox/add-edit-catbox.component';
import { ShowCatboxComponent } from './catbox/show-catbox/show-catbox.component';
import { CatprofileComponent } from './catprofile/catprofile.component';
import { AddEditCatprofileComponent } from './catprofile/add-edit-catprofile/add-edit-catprofile.component';
import { ShowCatprofileComponent } from './catprofile/show-catprofile/show-catprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    CatboxComponent,
    AddEditCatboxComponent,
    ShowCatboxComponent,
    CatprofileComponent,
    AddEditCatprofileComponent,
    ShowCatprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
