import { Component } from '@angular/core';
import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HomeComponent } from './home/home.component';

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

//fetch Word
  getDefinition(vocabword : string) {
        //using get request
        return this.http.get(`http://13.58.45.177/definition/${vocabword}`)
                   .map(res => res.json())
                   .catch((error) => {
                     console.log('error ' + error);
                   throw error;
                 });
                 }
  // getError(error: Response) {
  //   console.error(error);
  //   return Observable.throw(error.json().error || 'Server error');
  // }
} //export
