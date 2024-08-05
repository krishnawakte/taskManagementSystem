import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { MyData } from 'src/assets/myData';
import { DataService } from '../data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit{

  //Variable Declaration
  public updatedData: any
  public data: any;
  public showForm = false;
  public newTask = {id: '', title: '', status: '', priority: '', dueDate: '' };

  constructor(
    private router: Router,
    private _sharedService: SharedService,
    private _dataService: DataService,
    private cdRef: ChangeDetectorRef
  ){

  }
  ngOnInit() {
    this.init();    
  }

  init(){
    this.data = this._dataService.getData();
    this.cdRef.detectChanges();
  }

  createTask() {
    this.newTask.id = this.data.length + 1;
    this.data.push(this.newTask);
    this.newTask = {id:'', title: '', status: '', priority: '', dueDate: '' };
    this.showForm = false;
  }

  selectTask(task:any){
    this._sharedService.setData(task);
    this.router.navigate(['/task-details'])
  }
  deleteTask(index: any) {
    this.data.splice(index, 1);
  }

}
