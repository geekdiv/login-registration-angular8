import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      password: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      agree: ["", Validators.required]
    });

    this.registerForm.valueChanges.subscribe(newValue => {
      if (newValue.agree === true) {
        this.registerForm.setErrors(null);
      } else {
        this.registerForm.setErrors({ required: true });
      }
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    console.log("Enter into onSubmit() method");
    console.log("Final Date ::" + JSON.stringify(this.registerForm.value));

    if (this.registerForm.invalid) {
      console.log("form is invalid");
      return;
    } else {
      console.log("is valid");
    }
  }
}
