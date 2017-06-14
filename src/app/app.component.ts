import { Component, OnInit } from '@angular/core';
import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { VocabService } from './vocab.service';
import { DefinitionComponent } from './definition/definition.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) //annotation: metadata added to our code

export class AppComponent {
  title = 'Vocab App';
}
