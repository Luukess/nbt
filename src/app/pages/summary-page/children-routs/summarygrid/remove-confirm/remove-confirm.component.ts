import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { DescriptionFormObject } from 'src/app/interfaces/description-form-object';

@Component({
  selector: 'app-remove-confirm',
  templateUrl: './remove-confirm.component.html',
  styleUrls: ['./remove-confirm.component.scss']
})
export class RemoveConfirmComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DescriptionFormObject) {
    this.promotionName = this.data.marketingName;
  }
  promotionName: string = '';
  ngOnInit(): void {
  }

}
