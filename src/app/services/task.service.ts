import { Injectable } from '@angular/core';

import {Http,Response, RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { environment } from 'environments/environment';
import { Task } from 'app/models/task';

@Injectable()
export class TaskService {

 private empUrl=environment.baseEmpUrl;
 private httpOptions:RequestOptions;
constructor(private http:Http) {
  let headers=new Headers({'content-Type':'application/json'});
  this.httpOptions=new RequestOptions({headers:headers});

   }

getTasks(): Observable<Task[]>{
  
  return this.http.get(this.empUrl).pipe(
     
	map((resp:Response) => <Task[]>resp.json())      
  );
}

getTasksById(taskId:number): Observable<Task>{
  alert("gettaskbyid url"+this.getUrlById(taskId));
  return this.http.get(this.getUrlById(taskId)).pipe(     
	map((resp:Response) => <Task>resp.json())      
  );
}

getUrlById(empId: number) :string{
	return this.empUrl + "/" +empId;
}
   
   
addTask(emp:Task): Observable<Task>{	
	return this.http.post(this.empUrl,JSON.stringify(emp),this.httpOptions).pipe(
		map((resp:Response)=><Task>resp.json())
		);
}
   
   
updateTask(emp:Task):Observable<Task>{
	return this.http.put(this.empUrl,JSON.stringify(emp),this.httpOptions).pipe(
		map((resp:Response)=><Task>resp.json())
		);
}
   
}
