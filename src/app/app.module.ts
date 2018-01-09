import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import   { Service } from './Classes/service';
import   { CollectionService } from './Classes/collectionservice';

import { AppComponent }  from './app.component';
import {FormsModule , ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import  { ReadCdsComponent } from './read-cds.component';
import  { CreateCdComponent } from './create-cd.component';


@NgModule({
  providers: [ Service , CollectionService, BrowserModule   ],
  imports:      [ BrowserModule , FormsModule , HttpModule , ReactiveFormsModule ],
  declarations: [ AppComponent ,  ReadCdsComponent , CreateCdComponent  ],
  bootstrap:    [ AppComponent  ]
})
export class AppModule { }
