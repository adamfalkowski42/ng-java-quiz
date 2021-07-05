import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Question} from "../model/question.model";
import {QuestionService} from "../services/question.service";
import {map, tap} from "rxjs/operators";


@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private http: HttpClient, private questionsService: QuestionService) {
  }

  getHttpQuestions() {
    return this.http.get<Question[]>('http://localhost:8080/api/v1/questions').subscribe();
  }

  getQuestions(){
    return this.http.get<Question[]>('http://localhost:8080/api/v1/questions').pipe(
      map(questions =>{
        return questions.map(question => {return {...question}
        });
      }),tap(questions =>{
        this.questionsService.setQuestions(questions);
      })
    );
  }
}

