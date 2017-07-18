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
    this.word = this._definitionService.getData().word;
    this.definition = this._definitionService.getData().definition;
  }

  postWord(word, definition) {
    this._definitionService.postWord({
      word: this.word,
      defintion: this.definition
    })
      .subscribe(
        res => console.log(res), 
        err => console.log(err));
  }

  ngOnInit () {

  }

}
