import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.scss']
})
export class EditdataComponent implements OnInit {

  constructor
    (@Inject(MAT_DIALOG_DATA) public data: any,
      private dialogRef: MatDialogRef<EditdataComponent>,
      private _formBuilder: FormBuilder) {
    this.newNameForm.statusChanges.subscribe(status => {
      if (status === 'VALID') {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    })
  }

  isDisabled: boolean = true;
  newNameForm = this._formBuilder.group({
    marketingName: ['', [Validators.required, Validators.minLength(3)]]
  })

  handleSave() {
    this.dialogRef.close({ data: this.newNameForm.value })
  }

  ngOnInit(): void {
    this.newNameForm.setValue({ marketingName: this.data.marketingName });
  }

}
