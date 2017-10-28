import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class CommonserviceService {

  private _serverUrl:string = "http://localhost:8080/"
  private _getAllTodoListUrl:string = this._serverUrl+"/todo/"
  private _getAllCompletedTodoListUrl:string = this._serverUrl+"/todo/status/Completed"
  private _getAllPendingTodoListUrl:string = this._serverUrl+"/todo/status/Pending"
  private _deleteTodoTaskUrl:string = this._serverUrl+"/todo/delete/"
  private _createTodoListUrl:string = this._serverUrl+"/todo/create"
  private _markCompleteTodoTaskUrl:string = this._serverUrl+"/todo/markcomplete"
  private _getAllTodoByIdUrl:string = this._serverUrl+"/todo/"

  // public pendingCount:number=0;
  // public completedCount:number=0;
  // public totalCount:number=0;


  constructor(private _http:Http) {
  //   let pendingTodoList = {}
  //   let pendingStatus = 'pending'
  //   this.getTodoList(pendingStatus)
  //   .subscribe(resTodoList => pendingTodoList = resTodoList);
    
  //   this.pendingCount = Object.keys(pendingTodoList).length;

  }

  getTodoList(status){
    let url:string ;

    if(status == 'pending'){
      url  = this._getAllPendingTodoListUrl
    }else if(status == 'completed'){
      url = this._getAllCompletedTodoListUrl
    }else{
      url = this._getAllTodoListUrl
    }
    //alert('url :: '+url);
    return this._http.get(url).map((response: Response) => response.json());
    
  }

  commonDeleteTodoTask(id){

    let url:string ;
    url = this._deleteTodoTaskUrl+id;
    //alert('url :: '+url);
    return this._http.delete(url).map((response: Response) => response.json());
    
  }

  add_edit_Task(todoJson){

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._createTodoListUrl,JSON.stringify(todoJson),options).map((response: Response) => response.json());
    
  }

  mark_as_complete_Task(todoJson){

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._markCompleteTodoTaskUrl,JSON.stringify(todoJson),options).map((response: Response) => response.json());
    
  }

 getTodoById(id){
    
    return this._http.get(this._getAllTodoByIdUrl+id).map((response: Response) => response.json());
    
  }

}
