import { Component, OnInit, Input } from '@angular/core';
import { Word } from './word.model';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  @Input() word: Word;

  constructor() {
    this.word = new Word(
      'tumultuous',
      8
    );
  }

  voteUp(): boolean {
    this.word.votes +=1;
    return false;
  }

  voteDown(): boolean {
    this.word.votes -=1;
    return false;
  }

  ngOnInit() {
  }

}
