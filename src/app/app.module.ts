import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import   { Service } from './Classes/service';
import   { CollectionService } from './Classes/collectionservice';

import { AppComponent }  from './app.component';
import {FormsModule , ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import  { ReadCollectionsComponent } from './read-collections.component';
import  { ReadCdsComponent } from './read-cds.component';
import  { CreateCdComponent } from './create-cd.component';
import  { ReadOneCdComponent } from './read-one-cd.component';
import { UpdateCdComponent } from './update-cd-component';
import { DeleteCdComponent } from './delete-cd.component';
import { CreateCollectionComponent } from './create-collection.component';

@NgModule({
  providers: [ Service , CollectionService, BrowserModule   ],
  imports:      [ BrowserModule , FormsModule , HttpModule , ReactiveFormsModule ],
  declarations: [ AppComponent ,  ReadCdsComponent , CreateCdComponent , ReadOneCdComponent , UpdateCdComponent , DeleteCdComponent , ReadCollectionsComponent , CreateCollectionComponent],
  bootstrap:    [ AppComponent  ]
})
export class AppModule { }
