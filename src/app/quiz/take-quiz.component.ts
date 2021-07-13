import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Question} from "../model/question.model";
import {QuestionService} from "../services/question.service";

@Component({
  selector:'app-take-quiz',
  templateUrl:'take-quiz.component.html',
  styleUrls:['take-quiz.component.css']
})
export class TakeQuizComponent implements OnInit{
  private questions: Array<Question>;
  public chosenQuestion: Question;
  showAnswer: boolean = false;
  private questionId: number[] = [];
  public resetQuestions: boolean =false;

  constructor(private route: ActivatedRoute,private questionService: QuestionService) {
  }
  ngOnInit() {
    this.questions = this.route.snapshot.data['questions'];
    this.questions.forEach(question =>{
      this.questionId.push(question.id);
    })
  }

  getQuestion(): Question{
    let randomId = this.questionId[Math.floor(Math.random() * this.questionId.length)];
    let returnQuestion;
    if(this.questions.length > 0){
      this.questions.forEach( question =>{
        if(question.id === randomId && !question.answered){
          returnQuestion=question;
        }
      })
    }
    return returnQuestion;
  }

  btnShowAnswer(question: Question) {
    this.showAnswer=true;
    this.questionService.updateQuestion(question);
  }

  nextQuestion() {
    this.showAnswer=false;
    let question = this.getQuestion();
    console.log('this is question:',question);
    if(question !== undefined){
      this.chosenQuestion=question;
    }else{
      this.resetQuestions = true;
      this.chosenQuestion=null;
    }
  }

  startQuiz() {
    this.nextQuestion();
  }

  resetQuiz() {
    this.questions.forEach(question=>{
      question.answered = false;
    })
    this.questionService.resetAnswered(this.questions).subscribe(
      response=>{
        this.resetQuestions = false;
        this.chosenQuestion = null;
      }
    );
  }
}
