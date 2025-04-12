import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatboxComponent } from './catbox/catbox.component';
import { AddEditCatboxComponent } from './catbox/add-edit-catbox/add-edit-catbox.component';
import { ShowCatboxComponent } from './catbox/show-catbox/show-catbox.component';
import { CatprofileComponent } from './catprofile/catprofile.component';
import { AddEditCatprofileComponent } from './catprofile/add-edit-catprofile/add-edit-catprofile.component';
import { ShowCatprofileComponent } from './catprofile/show-catprofile/show-catprofile.component';
import { ListSelectCatprofileComponent } from './catprofile/list-select-catprofile/list-select-catprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    CatboxComponent,
    AddEditCatboxComponent,
    ShowCatboxComponent,
    CatprofileComponent,
    AddEditCatprofileComponent,
    ShowCatprofileComponent,
    ListSelectCatprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
