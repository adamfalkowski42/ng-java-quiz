import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Question} from "../model/question.model";
import {Observable} from "rxjs";


@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private http: HttpClient) {
  }

  getHttpQuestions() {
    return this.http.get<Question[]>('http://localhost:8080/api/v1/questions').subscribe();
  }

  getQuestions(){
    return this.http.get<Array<Question>>('http://localhost:8080/api/v1/questions');
  }

  getQuestionById(id: number){
    return this.http.get<Question>(`http://localhost:8080/api/v1/questions/${id}`)
  }
  // getQuestions(){
  //   return this.http.get<Question[]>('http://localhost:8080/api/v1/questions').pipe(
  //     map(questions =>{
  //
  //       return questions.map(question => {return {...question}
  //       });
  //     }),tap(questions =>{
  //       this.questionsService.setQuestions(questions);
  //     })
  //   );
  // }

  addNewQuestion(question: Question){
    return this.http.post<Question>('http://localhost:8080/api/v1/question',question);
  }
  // addNewQuestion(question: Question){
  //   return this.http.post<Question>('http://localhost:8080/api/v1/question',question).subscribe(
  //     response =>{console.log(response);}, error => {
  //       console.log(error);
  //     }
  //
  //   );
  // }

  updateNewQuestion(question: Question) {
    console.log('This is the question being updated: ', question);
    return this.http.put<Question>('http://localhost:8080/api/v1/question',question).subscribe(
      response=>{
        console.log("Response on update: ",response);
      },error =>{
        console.log("error in update: ", error);
      }
    )

  }

  deleteQuestion(id: number) {
    return this.http.delete(`http://localhost:8080/api/v1/question/${id}`)
  }

  resetQuiz(questions: Array<Question>) {
    return this.http.put<Question>('http://localhost:8080/api/v1/question/updateAll',questions);
  }
}

