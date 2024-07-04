import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserComponent } from './user/user.component' 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
		RouterOutlet,
		CommonModule, 
		HelloWorldComponent,
		UserComponent,
	],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = ['jhon','jhonny','joe','cameron'];
	activated = false;
	
	sayHello() {
		alert("Hola desde app.component");
	}
}