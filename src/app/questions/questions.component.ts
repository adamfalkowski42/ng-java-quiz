import {Component, OnInit, ViewChild} from "@angular/core";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {QuestionService} from "../services/question.service";
import {Question} from "../model/question.model";
import {Subscription} from "rxjs";
import {DataStorageService} from "../shared/data-storage-service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @ViewChild('questionForm') questionForm: NgForm;
  question: Question = new Question(0,'','',false,'');
  questions: Array<Question>;
  subscription: Subscription;
  public isEditMode: boolean=false;


  constructor(private questionService: QuestionService, private dataStorage: DataStorageService) {
  }

  ngOnInit(): void {

    this.dataStorage.getQuestions().subscribe(
      response =>{
        this.questions=response;
      }
    );
    // this.subscription = this.questionService.questionsChanged.subscribe(
    //   (questions: Question[]) => {
    //     this.questions = questions;
    //   }
    // )
  }


  onSubmit(questionForm: NgForm) {
    if(this.isEditMode){
      console.log(questionForm.value);
        this.questionService.updateQuestion(questionForm.value);
        questionForm.reset();
    }else{
      this.questionService.addQuestion(questionForm.value);
    }

  }

  onCancelClick() {

  }

  onEdit(questionElement: Question) {

    this.isEditMode=true;
    this.questionForm.form.patchValue({
      'id':questionElement.id,'question': questionElement.question, 'answer':questionElement.answer
    })
  }

  onDelete(questionElement: Question) {

  }
}
