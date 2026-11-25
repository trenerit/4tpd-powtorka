import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formularz',
  imports: [RouterLink, FormsModule],
  templateUrl: './formularz.html',
  styleUrl: './formularz.css',
})
export class Formularz {

  login: string = '';

  wysylka(dane: any): void {
    console.log(dane.value.login);
    this.login = dane.value.login;
  }

}
