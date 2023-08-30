import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Definitionform } from 'src/app/interfaces/definitionform';

@Component({
  selector: 'app-descriptionform',
  templateUrl: './descriptionform.component.html',
  styleUrls: ['./descriptionform.component.scss']
})
export class DescriptionformComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) {
    this.definitionForm.valueChanges.subscribe(status => {
      localStorage.setItem('descriptionForm', JSON.stringify(status));
    });
  };

  public definitionForm = this._formBuilder.group({
    marketingName: ['', [Validators.required]],
    technicalName: [''],
    description: ['']
  });


  ngOnInit(): void {
    const formData: string | null = localStorage.getItem('descriptionForm');
    if (formData) {
      this.definitionForm.setValue(JSON.parse(formData))
    };
  };

}
