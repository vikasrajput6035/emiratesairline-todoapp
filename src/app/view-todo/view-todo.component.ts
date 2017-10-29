import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from "../commonservice.service";
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent implements OnInit {

  public todoList = [];
  
  status:string;
  //responseJson = {"message":"","statusCode":"","object":[]};

  constructor(private _commonserviceservice : CommonserviceService,private _route:ActivatedRoute,private router: Router) {
    _route.params.forEach(params => {
    status = this._route.snapshot.params['status'];
    //  alert('called viewcomponent '+status);
    this._commonserviceservice.getTodoList(status)
    .subscribe(resTodoList => this.todoList = resTodoList);

  });
  }

  ngOnInit() {}

  deleteTodoTask(id){
    
    //let status:string = 'all';
    this.status = this._route.snapshot.params['status'];
    let statuscode:string;
    
    this._commonserviceservice.commonDeleteTodoTask(id).subscribe(resTodoList => {
      this._commonserviceservice.getTodoList(this.status).subscribe(resTodoList => this.todoList = resTodoList);
    });
    

    //this.router.navigate(['/todo/status/',status]);
  }  

  completeTodoTask(todo){
    
    let statuscode:string;
    this.status = this._route.snapshot.params['status'];
    let todoList = [];  
    this._commonserviceservice.mark_as_complete_Task(todo).subscribe(resTodoList => todoList = resTodoList);
    
    this._commonserviceservice.mark_as_complete_Task(todo).subscribe(resTodoList =>{
      this._commonserviceservice.getTodoList(this.status).subscribe(resTodoList => this.todoList = resTodoList);
    });
    
    //this.router.navigate(['/todo/status/',status]);   
  }  

}



