import { Component, OnInit } from '@angular/core';
import { Task } from 'app/models/task';
import { TaskService } from 'app/services/task.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {


  tasks:Task[];
  constructor(private taskService:TaskService, private datePipe:DatePipe,private router: Router) { }

  ngOnInit() {

    this.taskService.getTasks().subscribe(
      (empData) => {
        console.log(empData);
      this.tasks = empData;
      console.log(this.tasks);
      }
    )
  }

  endTask(taskId:number){
    	
			this.taskService.getTasksById(taskId).subscribe(
				(empData) => {								
					empData.endDate=new Date(this.datePipe.transform(new Date(),'yyyy-MM-dd'));
					this.taskService.updateTask(empData).subscribe(
						(data) => {
							alert(data.task+" ended successfully");							
						}
					);
				}
      );
      window.location.href="/";
  }

}
