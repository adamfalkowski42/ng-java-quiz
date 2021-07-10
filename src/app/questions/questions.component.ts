import {Component, OnInit} from "@angular/core";
import {Question} from "../model/question.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Array<Question>;
  isLoading: boolean = false;


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.questions = this.route.snapshot.data['question'];
    this.questions.sort((a,b)=>{
      return a.id - b.id;
    })
  }
}
