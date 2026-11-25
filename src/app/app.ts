import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Start } from './start/start';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
