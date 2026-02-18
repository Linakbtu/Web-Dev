import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [NgOptimizedImage,FormsModule],
  template: `
    Username:{{ username }}

   <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img src="/logo.svg" alt="Angular logo" width="32" height="32" priority />
      </li>
      <li>
        Dynamic Image:
        <img [src]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
    </ul>
    
    <p>Framework: {{ favoriteFramework }}</p>
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id = "framework" type = "text" [(ngModel)]="favoriteFramework"/>
    </label>
    <br>
    <button (click)="showFramework()">Show Framework</button>

  `
})

export class User {
  logoUrl = '/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngtech';
  favoriteFramework = '';
  showFramework(){
    alert(this.favoriteFramework);
  }
}

