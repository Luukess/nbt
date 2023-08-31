import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DescriptionFormObject } from 'src/app/interfaces/description-form-object';
import { RemoveConfirmComponent } from './remove-confirm/remove-confirm.component';

@Component({
  selector: 'app-summarygrid',
  templateUrl: './summarygrid.component.html',
  styleUrls: ['./summarygrid.component.scss']
})
export class SummarygridComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  dataFromStorage: Array<DescriptionFormObject> = [];
  displayedColumns: Array<string> = ['no', 'name', 'actions']

  // handleEditPromotion() {

  // }

  private handleRemovePromotion(index: number) {
    const allData: DescriptionFormObject[] = this.dataFromStorage;
    const modifiedArray = allData.splice(index, 1);
    localStorage.setItem('definitionDataArray', JSON.stringify(allData));
    this.dataFromStorage = [...allData];
  };

  openRemoveDialog(index: number) {

    const currentObject = this.dataFromStorage.find((element, i) => i === index);
    let dialogRef = this.dialog.open(RemoveConfirmComponent, { data: currentObject })
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'true') {
        this.handleRemovePromotion(index);
      };
    });
  };

  ngOnInit(): void {
    const storage: any = localStorage.getItem('definitionDataArray');
    const data = JSON.parse(storage);
    this.dataFromStorage = data;
  }

}
