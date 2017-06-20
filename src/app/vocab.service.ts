import { Component } from '@angular/core';
import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HomeComponent } from './home/home.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

@Injectable()

export class VocabService {
  constructor(private http : Http) { }

//fetch Word
  getDefinition(vocabword : string) {
        //using get request
        return this.http.get(`http://13.58.45.177/definition/${vocabword}`)
                   .map(res => res.json())
                   .catch(this._errorHandler);
                }
                _errorHandler(error: Response) {
                  console.error(error);
                  return Observable.throw(error || 'Server Error')
                }

} //export
