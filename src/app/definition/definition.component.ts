import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { VocabService } from '../vocab.service';
import { DefinitionService } from '../definition.service';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css']
})
export class DefinitionComponent {
  word: string;
  definition: any;


  constructor(
    private _definitionService: DefinitionService,
  ) {
    this.definition = this._definitionService.getData();
  }

  ngOnInit () {

  }

}
