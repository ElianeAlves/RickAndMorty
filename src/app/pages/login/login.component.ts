import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  form!: FormGroup

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {
    //Validação dos campos do formulário de login
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])]
    })
  }

  login() {
    this.authService.login(this.form.value.username, this.form.value.password)
  }
}
