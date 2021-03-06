import { Component, OnInit } from '@angular/core';
import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router }   from '@angular/router';
import { MdInputModule, MdButtonModule } from '@angular/material';

import { VocabService } from '../vocab.service';
import { DefinitionService } from '../definition.service';
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
  errorMsg: string;
  submitted: boolean;



  constructor(
    private _definitionService: DefinitionService,
    private _vocabService: VocabService,
    private _router: Router
  ) {
    this.submitted = false;
  }


  getDefinition(vocabword : string) {
    this.submitted = true;
    this._vocabService.getDefinition(vocabword)
      .subscribe(
        data => {
          this._definitionService.saveDefinition(data);
          this._router.navigate(['/definition', vocabword]);
        },
        // error => this.errorMsg = error
         error => this.errorMsg = "server is down"
      );

    // call the vocab service, with subscribe method

    // if an error occurs, display error on view

    // else if success
    // ?? pass data to definition component
    // navigate to definition component
  } //getDefinition


}
