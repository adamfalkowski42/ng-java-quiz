import {Question} from "../model/question.model";
import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {DataStorageService} from "../shared/data-storage-service";

@Injectable({providedIn: 'root'})
export class QuestionService {
  private questions: Array<Question> = new Array<Question>();
  questionsChanged = new Subject<Array<Question>>();
  private question: Question;

  constructor(private dataService: DataStorageService) {
  }

  setQuestions(questions: Array<Question>) {
    this.questions = questions;
    this.questionsChanged.next(this.questions.slice());
  }

  getQuestions(): Observable<Array<Question>> {
    return this.dataService.getQuestions();
  }

  getQuestion(id: number): Observable<Question>{
    return this.dataService.getQuestionById(id);
  }

  addQuestion(question: Question): Observable<Question>{
    return this.dataService.addNewQuestion(question);
  }

  updateQuestion(questionUpdate: Question) {
    questionUpdate.answered=true;
    this.dataService.updateNewQuestion(questionUpdate);
  }

  deleteQuestion(id: number): Observable<any> {
    return this.dataService.deleteQuestion(id);
  }

  resetAnswered(questions: Array<Question>): Observable<any> {
    return this.dataService.resetQuiz(questions);
  }
}
