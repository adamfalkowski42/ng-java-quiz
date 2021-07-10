import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from "./header/header.component";
import {QuestionsComponent} from "./questions/questions.component";
import {QuestionItemComponent} from "./questions/question-item/question-item.component";
import {QuestionEditComponent} from "./questions/question-edit/question-edit.component";
import {AlertComponent} from "./shared/alert/alert.component";
import {QuestionAddComponent} from "./questions/question-add/question-add.component";
import {LoadingSpinnerComponent} from "./shared/loading-spinner/loading-spinner.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionsComponent,
    QuestionItemComponent,
    QuestionEditComponent,
    AlertComponent,
    QuestionAddComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
