import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router) {


   }

  ngOnInit() {
  }


  openTodoList(status){
    //alert('status : '+status);
    this.router.navigate(['/todo/status/',status]);
  }

  openNewTodo(){
    this.router.navigate(['/todo/add']);
  }
}
