import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;

  get equipments() {
    return this.form.controls['equipments'] as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      equipments: this.fb.array([])
    })
  }

  salvar() {
    console.log(this.form.value);
  }

}
