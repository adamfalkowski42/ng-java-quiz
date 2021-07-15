import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Question} from "../model/question.model";
import {QuestionService} from "../services/question.service";

@Component({
  selector: 'app-take-quiz',
  templateUrl: 'take-quiz.component.html',
  styleUrls: ['take-quiz.component.css']
})
export class TakeQuizComponent implements OnInit {
  private questions: Array<Question> = new Array<Question>();
  private questionsAnswered: Array<Question> = new Array<Question>();
  private questionsNotAnswered: Array<Question> = new Array<Question>();
  public chosenQuestion: Question;
  showAnswer: boolean = false;
  private questionId: Array<number> = new Array<number>();
  public resetQuestions: boolean = false;


  constructor(private route: ActivatedRoute, private questionService: QuestionService) {
  }

  ngOnInit() {
    this.questions = this.route.snapshot.data['questions'];
    this.questions.forEach(
      question => {
        if (question.answered) {
          this.questionsAnswered.push(question);
        }

      }
    )
    this.questions.forEach(
      question => {
        if (!question.answered) {
          this.questionsNotAnswered.push(question);
        }
      }
    )
    this.questionsNotAnswered.forEach(question => {
      this.questionId.push(question.id);
    })
  }

  getQuestion(): Question {
    let randomId = Math.floor(Math.random() * this.questionId.length);
    let randomQuestion = this.questionsNotAnswered[randomId];
    if (randomQuestion && !randomQuestion.answered) {
      return randomQuestion;
    }
    return randomQuestion;
  }

  btnShowAnswer(question: Question) {
    this.showAnswer = true;
    this.questionService.updateQuestion(question);
    this.questionsAnswered.push(question);
    this.questionsNotAnswered.splice(this.questionsNotAnswered.indexOf(question), 1);

  }

  nextQuestion() {
    this.showAnswer = false;
    let question = this.getQuestion();
    if (question !== undefined && question !== null) {
      this.chosenQuestion = question;
    } else {
      this.resetQuestions = true;
      this.chosenQuestion = null;
    }
  }

  startQuiz() {
    this.nextQuestion();
  }

  resetQuiz() {
    this.questionsAnswered.forEach(question => {
      question.answered = false;
    })
    this.questionService.resetAnswered(this.questionsAnswered).subscribe(
      response => {
        this.resetQuestions = false;
        this.chosenQuestion = null;
      }
    );
    this.questions = this.route.snapshot.data['questions'];

    this.questionsNotAnswered = [];
    this.questions.forEach(
      question =>{
        this.questionsNotAnswered.push(question);
      }
    )
    this.questionsAnswered = [];
  }
}
