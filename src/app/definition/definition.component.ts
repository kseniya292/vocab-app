import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { VocabService } from '../vocab.service';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css']
})
export class DefinitionComponent implements OnInit {
  type: string;
  definition: string;


  constructor() {
    this.type = 'adjective';
    this.definition = 'definition';
  }

  ngOnInit() {
  }

}
