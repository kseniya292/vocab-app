import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { VocabService } from '../vocab.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css']
})
export class DefinitionComponent implements OnInit {
  word: string;
  definition: string;


  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.definition = this.route.snapshot.data['definition'].definition;
    this.word = this.route.snapshot.data['definition'].word;
  }

}
