import { Component, Injectable } from '@angular/core'
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HomeComponent } from './home/home.component';
import { DefinitionComponent } from './definition/definition.component';

//Name Service
export interface myData {
   name : any;
}

@Injectable()

export class DefinitionService {

  sharingData: myData = {name: "kseniya"}

  saveDefinition(definition) {
    this.sharingData.name = definition;
    console.log(this.sharingData.name);
  }

  getData() {
    console.log(this.sharingData.name);
    return this.sharingData.name;
  }

} //export
