import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyData } from 'src/assets/myData';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public modifiedData: any;
  private data: MyData[] = [
    { id: 1, title: "sasa", status: "Completed", priority: "Low", dueDate: "2024-08-21"},
    { id: 2, title: "fdf", status: "Completed", priority: "High", dueDate: "2024-08-08" },
    { id: 3, title: "Tagfgsk1", status: "Incomplete", priority: "Low", dueDate: "2024-08-03" },
    { id: 4, title: "hgh", status: "Completed", priority: "Medium", dueDate: "2024-08-18" }
  ];

  getData(): MyData[] {
    return this.data;
  }

  updateData(data: MyData) {
    const index = this.data.findIndex((item) => item.id === data.id);
    if (index !== -1) {
      this.data[index] = data;
    } else {
      console.log('Data not found');
    }
  }


}
