import { Component } from '@angular/core';
import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { Word } from './word/word.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const appId = "3e23ba37";
const appKey = "90da04772846856a4fc02a7146753d12";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

@Injectable()

export class VocabService {
  constructor(private http : Http) { }
    private dictionaryApi = 'https://od-api.oxforddictionaries.com/api/v1/entries/en/ace/definitions';

//fetch Word
  getDefinition(): Observable<any[]> {
        let headers = new Headers({
          'Content-Type': 'application/json',
          'app_id': '3e23ba37',
          'app_key': '90da04772846856a4fc02a7146753d12'
         });
        //using get request
        return this.http.get(this.dictionaryApi, headers)
                   .map(res => {
                     console.log(res);
                     res.json()
                   })
                   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
                 }
} //export
