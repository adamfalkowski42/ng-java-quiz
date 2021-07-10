import {Question} from "../../model/question.model";
import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../../services/question.service";
import {NgForm} from "@angular/forms";

@Component({
  selector:'app-question-edit',
  templateUrl:'./question-edit.component.html',
  styleUrls:['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit{

  question: Question;
  saved: string=null;
  isLoading: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private questionService: QuestionService){}

  ngOnInit() {
    console.log('this is question in edit:',this.question);
    this.question = this.route.snapshot.data['question'];

  }

  private goBack() {
    this.router.navigate(['/questions']);
  }

  onSubmit(editForm: NgForm) {
    this.isLoading=true;
    this.questionService.addQuestion(editForm.value).subscribe(
      response=>{
        this.isLoading=false;
        this.saved="Record updated!"
      }
    );
  }
  onBackClick() {
    this.goBack();
  }

  onHandleSave() {
    this.saved=null;
    this.goBack();
  }

  removeQuestion(editForm: NgForm) {
    this.questionService.deleteQuestion(this.question.id).subscribe(
      response=>{
        this.saved="Record deleted!";
      }
    );

  }
}
