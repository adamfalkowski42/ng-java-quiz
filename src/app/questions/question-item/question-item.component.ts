import {Component, Input, OnInit} from "@angular/core";
import {Question} from "../../model/question.model";

@Component({
  selector: 'app-question-item',
  templateUrl: 'question-item.component.html',
  styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent implements OnInit{
  @Input() question: Question;
  @Input() index: number;

  ngOnInit(): void {
  }

}
