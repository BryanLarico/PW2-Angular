import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule, 
    HelloWorldComponent,
    UserComponent,
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService] 
})
export class AppComponent {
  title: string = "my-dream-app";
	name: string = 'Bryan Larico R.';
  age: number = 40;
	email: string = 'blaricor@unsa.edu.pe';
  posts: any[] = [];
	
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      //console.log(data);
			this.posts = data;
    });
  }
}