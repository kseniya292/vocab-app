import { Component, OnInit } from '@angular/core';
import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router }   from '@angular/router';

import { VocabService } from '../vocab.service';
import { DefinitionComponent } from '../definition/definition.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Vocab App';
  vocabword: string;
  definition: any;

  constructor(
    private _vocabService: VocabService,
    private _router: Router
  ) {}

  getDefinition(vocabword) {
    this._vocabService.getDefinition(vocabword)
                      .subscribe(
                        definition => this.definition = definition,
                        error => console.error('Error: ' + error),
                        () => console.log('Completed!'));
    this._router.navigate(['/definition']);
  } //getDefinition

}
