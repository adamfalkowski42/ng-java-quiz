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

  addQuestion(question: Question){
    this.questions.push(question);
    this.questionsChanged.next(this.questions.slice());
  }

  updateQuestion(questionUpdate: Question) {

    this.questions.forEach(question =>{
      if(question.id === questionUpdate.id){
        question[question.id-1] = questionUpdate;
        this.questionsChanged.next(this.questions.slice());
      }
    })
  }
}
