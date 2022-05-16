import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {
  @Input() equipments!: FormArray;
  @Input() form!: FormGroup;

  faX = faX;
  faPlus = faPlus;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addLine() {
    const group =
      this.fb.group({
        type: [''],
        model: [''],
        brand: [''],
        value: [''],
        quantity: [''],
      })
    this.equipments.push(group);
  }

  removeLine(index: number) {
    this.equipments.removeAt(index);
  }
}
