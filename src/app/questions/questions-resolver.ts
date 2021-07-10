import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import {QuestionService} from "../services/question.service";
import {Question} from "../model/question.model";

@Injectable({ providedIn: 'root' })
export class QuestionsResolverService implements Resolve<Array<Question>> {
  constructor(
    private questionService: QuestionService
  ) {}
  //this resolve subscribes for us
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.questionService.getQuestions();
  }
}
