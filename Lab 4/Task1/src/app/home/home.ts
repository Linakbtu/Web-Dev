import { Component, signal , inject,input} from '@angular/core';
import { User } from '../user/user';
import { Child } from '../child/child';
import { Comment } from '../comment/comment';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { CarService } from '../car/car.service';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { ReversePipe } from '../reverse-pipe/reverse-pipe';

@Component({
  selector: 'app-home',
  imports: [ Child, Comment,ReactiveFormsModule,LowerCasePipe,DecimalPipe,CurrencyPipe,DatePipe, ReversePipe],
  template: `
    Hello Universe,
    Hello {{ city }},
    {{ 1+1 }},

    <br>
    <app-child (addItemEvent)="addItem($event)"/>
    <p>🐢 all the way down {{ items.length }}</p>

    <div>
      <h1>How I feel about Angular</h1>
      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly be.
          The Angular community is also filled with amazing contributors and experts that create excellent
          content. The community is welcoming and friendly, and it really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and takes
          care to make us very happy. They genuinely want Angular to be the best framework it can be, and
          they're doing such an amazing job at it, too. This statement comes from my heart and is not at
          all copied and pasted. In fact, I think I'll say these exact same things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly be.
          The Angular community is also filled with amazing contributors and experts that create excellent
          content. The community is welcoming and friendly, and it really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and takes
          care to make us very happy. They genuinely want Angular to be the best framework it can be, and
          they're doing such an amazing job at it, too. This statement comes from my heart and is not at
          all copied and pasted. In fact, I think I'll say these exact same things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly be.
          The Angular community is also filled with amazing contributors and experts that create excellent
          content. The community is welcoming and friendly, and it really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and takes
          care to make us very happy. They genuinely want Angular to be the best framework it can be, and
          they're doing such an amazing job at it, too. This statement comes from my heart and is not at
          all copied and pasted.
        </p>
      </article>
      @defer(on viewport) {
        <app-comment />
      } @placeholder {
        <p>Future comments</p>
      } @loading(minimum 2s) {
        <p>Loading comments...</p>
      }
    </div>

    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <label>
        Name
        <input type="text" formControlName="name" />
      </label>
      <label>
        Email
        <input type="email" formControlName="email" />
      </label>
      <button type="submit">Submit</button>
    </form>

    <h2>Profile Form</h2>
    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>

    <p>Car Listing: {{ display }} </p>

    {{username | lowercase}}

    <ul>
      <li>Number with "decimal" {{ num | number: '3.2-2' }}</li>
      <li>Date with "date" {{ birthday | date: "medium" }}</li>
      <li>Currency with "currency" {{ cost | currency}}</li>
    </ul>

    Reverse Machine: {{ word | reverse}}

  `
  ,
  styles: `
    :host {
      color: blue;
    }
  `,
})
export class Home {
  protected readonly title = signal('Task1');

  city = 'San Francisco';

  isServerRunning = true;

  users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
  ];

  isEditable = true;

  message = '';
  
  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }
  
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  handleSubmit(){
    alert(
      this.profileForm.value.name + ' | ' + this.profileForm.value.email
    );
  }

  carService = inject(CarService);

  display = this.carService.getCars().join(' ⭐️ ');

  username = 'yOunGTECh';

  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;

  word = "Danial";
}