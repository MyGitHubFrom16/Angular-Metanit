import { Component } from '@angular/core';
     
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent { 
    name:string="Tom";
    age:number = 24;
}