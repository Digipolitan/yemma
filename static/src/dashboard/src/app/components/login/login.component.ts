import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  protected form: FormGroup;
  private submitted: boolean;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private sessionService: SessionService) {
    this.submitted = false;
  }

  public ngOnInit(): void {
    this.form = this.createForm();
  }

  protected onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    const port: number = this.form.get('port').value;
    this.sessionService.store({
      port: port
    });
    this.router.navigate(['/']);
  }

  private createForm(): FormGroup {
    const location = window.location;
    return this.formBuilder.group({
      port: [
        location.port, [
          Validators.required
        ]
      ]
    });
  }
}
