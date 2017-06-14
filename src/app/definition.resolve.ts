import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { VocabService } from './vocab.service';

@Injectable()
export class DefinitionResolve implements Resolve<any> {

  constructor(private vocabService: VocabService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.vocabService.getDefinition(route.params['word']);
  }
}