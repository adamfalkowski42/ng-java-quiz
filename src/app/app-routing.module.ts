import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {QuestionsComponent} from "./questions/questions.component";
import {QuestionsResolverService} from "./questions/questions-resolver";

const appRoutes: Routes =
  [
    {path: '',redirectTo: '/', pathMatch:'full'},
    {path: 'questions',component: QuestionsComponent, resolve: [QuestionsResolverService]},
  ]

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
