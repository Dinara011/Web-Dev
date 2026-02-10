import { Routes } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  template: '<h1>Home Page</h1>',
  standalone: true
})
export class Home {}


@Component({
  template: '<h1>User Page</h1>',
  standalone: true
})
export class User {}


export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: Home, 
  },
  {
    path: 'user',
    title: 'App User Page',
    component: User,
  }
];