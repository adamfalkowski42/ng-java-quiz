import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Question} from "../../model/question.model";
import {Router} from "@angular/router";
import {QuestionService} from "../../services/question.service";

@Component({
  selector:'app-question-add',
  templateUrl:'question-add.component.html',
  styleUrls:['./question-add.component.css']

})
export class QuestionAddComponent{
  question: Question = new Question(0,'','',false,'');
  saved: string=null;
  isLoading: boolean = false;

  constructor(private router: Router, private questionService: QuestionService){}

  onSubmit(questionForm: NgForm) {
    this.isLoading=true;
    this.questionService.addQuestion(questionForm.value).subscribe(
      response=>{
          this.isLoading=false;
          this.saved="Record saved!";
      }
    );

  }

  onCancelClick() {
    this.router.navigate(['/questions']);
  }

  onHandleSave() {
    this.saved=null;
    this.router.navigate(['/questions']);
  }
}
