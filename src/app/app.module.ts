import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { VocabService } from './vocab.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AlertModule.forRoot()
  ],
  providers: [
    VocabService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
