import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
  questionForm: FormGroup;
  questions: Question[] = [];
  subscription: Subscription;
  public isEditMode: boolean;


  constructor(private questionService: QuestionService, private dataStorage: DataStorageService) {
  }

  ngOnInit(): void {
    this.initForm();
    this.dataStorage.getQuestions().subscribe();
    this.subscription = this.questionService.questionsChanged.subscribe(
      (questions: Question[]) => {
        this.questions = questions;
      }
    )
  }

  private initForm() {
    let question = '';
    let answer = '';
    this.questionForm = new FormGroup({
      'question': new FormControl(question, Validators.required),
      'answer': new FormControl(answer, Validators.required)
    })
  }

  onSubmit() {
    if(this.isEditMode){
      this.questionService.updateQuestion(this.questionForm.value);
      this.dataStorage.updateNewQuestion(this.questionForm.value);
      this.questionForm.reset();
    }else{
      this.questionService.addQuestion(this.questionForm.value);
      this.dataStorage.addNewQuestion(this.questionForm.value);
      this.questionForm.reset();
    }

  }

  onCancelClick() {

  }

  onDelete(questionElement: Question) {

  }

  onEdit(questionElement: Question) {
    this.isEditMode =true;
    this.questionForm.patchValue({'question':   questionElement.question,'answer':questionElement.answer})
  }
}




