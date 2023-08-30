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
      localStorage.setItem('lastDataForm', JSON.stringify(status));
      if (status.marketingName !== '' || status.technicalName !== '') {
        this._navState.handleIsAccessState(true);
      } else {
        this._navState.handleIsAccessState(false);
      }
    });

    this.definitionForm.statusChanges.subscribe(status => {
      if (status === 'VALID') {
        const dataLocalstorage: string | null = localStorage.getItem('definitionDataArray')
        if (dataLocalstorage !== null) {
          const dataArray = JSON.parse(dataLocalstorage);
          dataArray.push(this.definitionForm.value);
          localStorage.setItem('definitionDataArray', JSON.stringify(dataArray));
        } else {
          const data = [];
          data.push(this.definitionForm.value);
          localStorage.setItem('definitionDataArray', JSON.stringify(data));
        }
      }
    })

  };

  public definitionForm = this._formBuilder.group({
    marketingName: ['', [Validators.required, Validators.minLength(6)]],
    technicalName: ['', [Validators.minLength(4), Validators.required]],
    description: ['']
  });


  ngOnInit(): void {
    const formData: string | null = localStorage.getItem('lastDataForm');
    if (formData) {
      const data = JSON.parse(formData)
      this.definitionForm.setValue({ marketingName: data.marketingName, technicalName: '', description: '' })
    };
  };

}
