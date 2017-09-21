import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../../services/session/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {

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
        const accessToken: string = this.form.get('accessToken').value;

        this.sessionService.store({
            port: port,
            accessToken: accessToken
        });

        this.router.navigate(['/']);
    }

    private createForm(): FormGroup {
        const location = window.location;
        return this.formBuilder.group({
            port: [
                this.sessionService.get().port, [
                    Validators.required
                ]
            ],
            accessToken: [
                this.sessionService.get().accessToken, [
                    Validators.required
                ]
            ]
        });
    }

}
