import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { VocabService } from './vocab.service';
import { DefinitionComponent } from './definition/definition.component';
import { HomeComponent } from './home/home.component';

import { DefinitionResolve } from './definition.resolve';

@NgModule({
  declarations: [
    AppComponent,
    DefinitionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'definition/:word',
        component: DefinitionComponent,
        resolve: {
          definition: DefinitionResolve
        }
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
])
  ],
  providers: [
    VocabService,
    DefinitionResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
