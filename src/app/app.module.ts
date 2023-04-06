import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { FormsModule } from '@angular/forms';
import { Quiz1Component } from './quiz1/quiz1.component';
import { QuestionComponent } from './question/question.component';
import { OptionComponent } from './option/option.component';
import { PagenationComponent } from './pagenation/pagenation.component';
import { ConfigComponent } from './config/config.component';
import { NavComponent } from './nav/nav.component';
import { AsidletfComponent } from './asidletf/asidletf.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ControlsidebarComponent } from './controlsidebar/controlsidebar.component';
import { ThemeComponent } from './theme/theme.component';
import { LoginComponent } from './login/login.component';
import { CalcService } from './services/calc.service';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    Quiz1Component,
    QuestionComponent,
    OptionComponent,
    PagenationComponent,
    ConfigComponent,
    NavComponent,
    AsidletfComponent,
    BodyComponent,
    FooterComponent,
    ControlsidebarComponent,
    ThemeComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CalcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
