import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { DataStorageService } from '../shared/data-storage-service';
import {QuestionService} from "../services/question.service";
import {Question} from "../model/question.model";

@Injectable({ providedIn: 'root' })
export class QuestionsResolverService implements Resolve<Question[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private questionService: QuestionService
  ) {}
  //this resolve subscribes for us
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const questions = this.questionService.getQuestions();

    if (questions.length === 0) {
      return this.dataStorageService.getQuestions();
    } else {
      return questions;
    }
  }
}
