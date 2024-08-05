import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { DataService } from '../data.service';
import { MyData } from 'src/assets/myData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit{

  public taskForm!:FormGroup;
  public retrievedData: any

  constructor(
    private fb: FormBuilder,
    private _sharedService: SharedService,
    private _dataService: DataService,
    private router: Router,
  ){}


  ngOnInit(){
    this.formCreation()
    this.retrievedData = this._sharedService.getData();
    this.patchValues();
  }

  formCreation(){
    this.taskForm = this.fb.group({
      id: ['',[Validators.required]],
      title: ['',[Validators.required]],
      status: ['',[Validators.required]],
      priority: ['',[Validators.required]], 
      dueDate: ['',[Validators.required]],
    });
  }

patchValues(){
  this.taskForm.patchValue({
    title: this.retrievedData?.title,
    status: this.retrievedData?.status,
    priority: this.retrievedData?.priority,
    dueDate: this.retrievedData?.dueDate
  })
  }

  onSubmit() {
    const updatedData = this.taskForm.value;
    updatedData.id = this.retrievedData.id;
    this._dataService.updateData(updatedData);
    this.router.navigate(['/task-list']);
  }

}
