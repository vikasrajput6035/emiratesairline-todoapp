import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonserviceService } from "../commonservice.service";
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-add-edit-todo',
  templateUrl: './add-edit-todo.component.html',
  styleUrls: ['./add-edit-todo.component.css']
})
export class AddEditTodoComponent implements OnInit {

  public todo;

  constructor(private _commonService:CommonserviceService, private _router:Router,private _route:ActivatedRoute) { 

    _route.params.forEach(params => {
    let id = this._route.snapshot.params['id'];
    this._commonService.getTodoById(id).subscribe(resTodoList => this.todo = resTodoList);
  });

  }
  
  ngOnInit() {}


  onSubmit(form: NgForm){
   
    var jsonFormStr = form.value;
    let status:string = 'pending';
    this._commonService.add_edit_Task(jsonFormStr).subscribe(resTodoList => {
      this._router.navigate(['/todo/status/',status]);
    });
    
  }

}
