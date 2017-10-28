import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { AddEditTodoComponent } from './add-edit-todo/add-edit-todo.component';

const routes: Routes = [
      
      {path:'todo/status/:status',component:ViewTodoComponent},
      {path:'todo/edit/:id',component:AddEditTodoComponent},
      {path:'todo/add/newtask',component:AddEditTodoComponent}
    ];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})  

export class AppRountingModule{}
export const rountingComponent = [ViewTodoComponent]  
