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

  addNewQuestion(question: Question){
    return this.http.post<Question>('http://localhost:8080/api/v1/question',question).subscribe(
      response =>{console.log(response);}, error => {
        console.log(error);
      }

    );
  }

  updateNewQuestion(question: Question) {

    return this.http.put<Question>('http://localhost:8080/api/v1/question',question).subscribe(
      response=>{
        console.log("Response on update: ",response);
      },error =>{
        console.log("error in update: ", error);
      }
    )

  }
}

