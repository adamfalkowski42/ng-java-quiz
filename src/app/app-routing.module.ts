import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {QuestionsComponent} from "./questions/questions.component";
import {QuestionEditComponent} from "./questions/question-edit/question-edit.component";
import {QuestionAddComponent} from "./questions/question-add/question-add.component";
import {QuestionsResolverService} from "./questions/questions-resolver";
import {QuestionEditResolverService} from "./questions/question-edit/question-edit-resolver.component";
import {TakeQuizComponent} from "./quiz/take-quiz.component";
import {QuizResolverService} from "./quiz/quiz-resolver";

const appRoutes: Routes =
  [
    {path: '',redirectTo: '/', pathMatch:'full'},
    {path: 'questions',component: QuestionsComponent, resolve: {question: QuestionsResolverService}},
    {path: 'questions/:id',component: QuestionEditComponent, resolve: {question: QuestionEditResolverService}},
    {path: 'question',component: QuestionAddComponent},
    {path: 'quiz',component:TakeQuizComponent, resolve:{questions: QuizResolverService}}

  ]

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
