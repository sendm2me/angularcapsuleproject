import { Component, OnInit } from '@angular/core';
import { Task } from 'app/models/task';
import { TaskService } from 'app/services/task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'app-task-form',
	templateUrl: './task-form.component.html',
	styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

	private task: Task;
	private parentTask: Task;
	private parentId: number;
	private startDate: string;
	private endDate: string;
	private isNew: boolean;

	constructor(private taskService: TaskService, 
		private router: Router, private route: ActivatedRoute,
		private datePipe:DatePipe) {
		this.task=new Task();
	}

	ngOnInit() {

		this.route.params.subscribe(
			params => {
				if (params['id'] != null) {
					this.taskService.getTasksById(params['id']).subscribe(
						(data) => {
							this.task = data;
							this.startDate =this.datePipe.transform(this.task.startDate,'yyyy-MM-dd');
							this.parentId=this.task.parentId.taskId;
						}
					);
					this.isNew = false;					
				} else {
					this.task = new Task();
					this.isNew = true;
					this.startDate = (new Date()).toISOString().substr(0, 10);
				}
			}

		);

		
	}


	updateStartDate() {
		this.task.startDate = new Date(this.startDate);
	}

	saveTask() {
		if (this.isNew) {			

			this.taskService.getTasksById(this.parentId).subscribe(
				(empData) => {								
					this.task.parentId = empData;					
					this.taskService.addTask(this.task).subscribe(
						(data) => {
							alert(data.taskId + "is added successfully");
							this.router.navigate(["/"]);
						}
					);
				}
			);

		} else {
			
			this.taskService.getTasksById(this.parentId).subscribe(
				(empData) => {								
					this.task.parentId = empData;
					this.taskService.updateTask(this.task).subscribe(
						(data) => {
							alert(data.taskId + "is updated successfully");
							this.router.navigate(["/"]);
						}
					);
				}
			);
			
		}

	}

}
