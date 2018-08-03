import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatIconModule,
        MatGridListModule,
        MatToolbarModule,
        MatMenuModule,
        MatNativeDateModule,
        MatRadioModule

  } from '@angular/material';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { logincomponent } from './login/login.component';
import { Routes ,RouterModule } from '@angular/router';
import { Signupcomponent } from './signup/signup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { customdirective } from './directive.component';
import { Designcomponent } from './design/design.component';
const Rlogin:Routes=[
  {path:'login',component:logincomponent},
  {path:'signup',component:Signupcomponent},
  {path:'design',component:Designcomponent}
]

@NgModule({
  declarations: [
    AppComponent,
    logincomponent,
    Signupcomponent,
    customdirective,
    Designcomponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
   RouterModule.forRoot(Rlogin),
   MatNativeDateModule,
   MatRadioModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
