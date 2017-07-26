import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TemplatesComponent} from './templates/templates.component';
import { ModulesComponent } from './modules/modules.component'

@NgModule({
  declarations: [
    AppComponent, TemplatesComponent, ModulesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
