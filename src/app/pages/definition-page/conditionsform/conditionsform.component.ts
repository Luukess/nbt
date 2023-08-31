import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-conditionsform',
  templateUrl: './conditionsform.component.html',
  styleUrls: ['./conditionsform.component.scss']
})
export class ConditionsformComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) {
    this.conditionsForm.valueChanges.subscribe(data => {
      if (data.portal !== '' || data.portal !== null) {
        this.disabledSelectState = false;
      } else {
        this.disabledSelectState = true;
      }
    });

    this.conditionsForm.statusChanges.subscribe(status => {
      const data = this.conditionsForm.value
      if (status === 'VALID') {
        localStorage.setItem('conditionsForm', JSON.stringify(data));
      }
    })
  }

  disabledSelectState: boolean = true

  public conditionsForm = this._formBuilder.group({
    portal: [null, [Validators.required]],
    type: [null, [Validators.required]],
    benefitAmount: [null],
    startDate: [null, [Validators.required]],
    endDate: [null],
    bussinessRadio: ['Bussiness conditions'],
    connectPromotions: [true],
    backPromotion: [false]
  });

  ngOnInit(): void {
  }

}
