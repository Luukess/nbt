import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Definitionform } from 'src/app/interfaces/definitionform';
import { NavstateService } from 'src/app/services/navstate.service';

@Component({
  selector: 'app-descriptionform',
  templateUrl: './descriptionform.component.html',
  styleUrls: ['./descriptionform.component.scss']
})
export class DescriptionformComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private _navState: NavstateService) {
    this.definitionForm.valueChanges.subscribe(status => {
      localStorage.setItem('descriptionForm', JSON.stringify(status));
      if (status.marketingName !== '' || status.technicalName !== '') {
        this._navState.handleIsAccessState(true);
      } else {
        this._navState.handleIsAccessState(false);
      }
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
