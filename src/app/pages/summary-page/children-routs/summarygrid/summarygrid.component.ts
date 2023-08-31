import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DescriptionFormObject } from 'src/app/interfaces/description-form-object';
import { RemoveConfirmComponent } from './remove-confirm/remove-confirm.component';
import { EditdataComponent } from './editdata/editdata.component';

@Component({
  selector: 'app-summarygrid',
  templateUrl: './summarygrid.component.html',
  styleUrls: ['./summarygrid.component.scss']
})
export class SummarygridComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  dataFromStorage: Array<DescriptionFormObject> = [];
  displayedColumns: Array<string> = ['no', 'name', 'actions'];

  private handleEditPromotion(index: number, newMarketingName: string) {
    const allData: DescriptionFormObject[] = [...this.dataFromStorage];
    const objectToModified: DescriptionFormObject | undefined = allData.find((element, i) => i === index);
    if (objectToModified) {
      const removedObject = allData.splice(index, 1, { ...objectToModified, marketingName: newMarketingName });
      localStorage.setItem('definitionDataArray', JSON.stringify(allData));
      this.dataFromStorage = allData;
    };
  };

  private handleRemovePromotion(index: number) {
    const allData: DescriptionFormObject[] = [...this.dataFromStorage];
    const modifiedArray = allData.splice(index, 1);
    localStorage.setItem('definitionDataArray', JSON.stringify(allData));
    this.dataFromStorage = allData;
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

  openEditDialog(index: number) {
    const currentObject = this.dataFromStorage.find((element, i) => i === index);
    let dialogRef = this.dialog.open(EditdataComponent, { data: currentObject });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== 'false') {
        this.handleEditPromotion(index, result.data.marketingName)
      }
    });
  };

  ngOnInit(): void {
    const storage: any = localStorage.getItem('definitionDataArray');
    const data = JSON.parse(storage);
    this.dataFromStorage = data;
  }

}
