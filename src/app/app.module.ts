import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { deneme } from 'deneme/deneme';
import { loop } from 'loop/loop';

@NgModule({
  declarations: [
    AppComponent,
    loop
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    
  ],
  providers: [],
  bootstrap: [loop]
})
export class AppModule { }
