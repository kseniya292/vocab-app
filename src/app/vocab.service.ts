import { Component } from '@angular/core';
import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HomeComponent } from './home/home.component';
import * as X2JS from 'x2js';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

@Injectable()

export class VocabService {
  constructor(private http : Http) { }

  x2js = new X2JS();

//fetch Word
  getDefinition(vocabword: string) {
        //using get request
        return this.http.get('http://www.dictionaryapi.com/api/v1/references/collegiate/xml/' + vocabword + '?key=f6b648e8-a858-4f2a-8abf-705db66d8897')
                   .map(res => res.text())
                   .map((xml: any) => this.x2js.xml2js(xml))
                   .map((data: any) => data.entry_list.entry[0].def.ss)
                   .catch((error:any) => Observable.throw(error || 'Server error'));
                 }
} //export
