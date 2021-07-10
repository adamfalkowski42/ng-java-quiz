import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';
import {QuestionService} from "../../services/question.service";
import {Question} from "../../model/question.model";


@Injectable({ providedIn: 'root' })
export class QuestionEditResolverService implements Resolve<Question> {
  constructor(
    private questionService: QuestionService) {}
  //this resolve subscribes for us
  resolve(route: ActivatedRouteSnapshot) {
    return this.questionService.getQuestion(+route.paramMap.get('id'));
  }
}
