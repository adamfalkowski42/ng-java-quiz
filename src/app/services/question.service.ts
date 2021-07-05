import {Question} from "../model/question.model";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({providedIn:'root'})
export class QuestionService{
  private questions: Question[] = [];
  questionsChanged = new Subject<Question[]>();

  setQuestions(questions: Question[]){
    this.questions = questions;
    this.questionsChanged.next(this.questions.slice());
  }

  getQuestions(){
    return this.questions.slice();
  }
}
