import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularWavesurferServiceModule } from 'angular-wavesurfer-service';

@NgModule({
  imports: [BrowserModule, FormsModule, AngularWavesurferServiceModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
