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

export class AppComponent {
  title = 'Vocab App';
  vocabword: string;

  constructor(private _vocabService: VocabService) {}

  // ngOnInit() { this.getDefinition(); }

  getDefinition(vocabword) {
    this._vocabService.getDefinition(vocabword)
                      .subscribe();
  }

  // getDefinition(vocabword: HTMLInputElement): boolean {
  //   console.log(`The word is ${vocabword.value}`);
  //   this.words.push(new Word(vocabword.value, 0));
  //   vocabword.value = '';
  //   return false;
  // }

}
