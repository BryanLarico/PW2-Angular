import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
	name : string;
	email;
	webpage : string;
	hobbies : string[];
	
	constructor() {
		console.log("Constructor working...");
		this.name = "Bryan Larico R.";
		this.email = "blaricor@unsa.edu.pe";
		this.webpage = "http://www.unsa.edu.pe";
		this.hobbies = ["Voley","Programacion","Netflix"];
	}
	showhobbies(){
		return true;
	}
}
