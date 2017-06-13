import { Component } from '@angular/core';
import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AppComponent } from './app.component';
import { parseString } from 'xml2js';

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
  // private dictionaryApi = 'http://www.dictionaryapi.com/api/v1/references/' + vocabword + '/xml/?key=f6b648e8-a858-4f2a-8abf-705db66d8897';

//fetch Word
  getDefinition(vocabword: string) {
        //using get request
        return this.http.get('http://www.dictionaryapi.com/api/v1/references/collegiate/xml/' + vocabword + '?key=f6b648e8-a858-4f2a-8abf-705db66d8897')
                   .map(res => {
                     parseString(res.text(), function (err, result) {
                       console.log(result)
                     })
                    //  let body = res.text()
                    //  console.log(body);
                    //  res.json()
                   })
                   .catch((error:any) => Observable.throw(error || 'Server error'));
                 }
} //export