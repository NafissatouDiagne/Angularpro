import { Component } from '@angular/core';
import { MatCardModule ,MatCardHeader,MatCardTitle} from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatCardHeader,MatCardModule,CommonModule,
    MatCardTitle,MatFormField,MatInputModule,
    FormsModule,  ReactiveFormsModule,MatButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
passwordFormControl =new FormControl('',[Validators.required]);
usernameFormControl = new FormControl('',[Validators.required])
  matcher = new MyErrorStateMatcher();
}
