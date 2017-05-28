import { Component, OnInit } from '@angular/core';
import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Word } from './word/word.model';
import { VocabService } from './vocab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) //annotation: metadata added to our code

export class AppComponent implements OnInit {
  title = 'Vocab App';
  words: Word[];

  constructor(private vocabService: VocabService) {}

  ngOnInit() { this.getDefinition(); }

  getDefinition() {
    this.vocabService.getDefinition()
                      .subscribe();
  }

  // getDefinition(word: HTMLInputElement): boolean {
  //   console.log(`The word is ${word.value}`);
  //   this.words.push(new Word(word.value, 0));
  //   word.value = '';
  //   return false;
  // }

}
