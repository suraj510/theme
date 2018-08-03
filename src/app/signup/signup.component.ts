import { Component } from "@angular/core";
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector:'signup-root',
    templateUrl:'./signup.component.html',
    styleUrls:['./signup.component.css']
 
})
export class Signupcomponent{
    email = new FormControl('', [Validators.required, Validators.email]);

    getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' :
              '';
    }
    
}
