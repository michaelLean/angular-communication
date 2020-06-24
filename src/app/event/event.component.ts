import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  title: string = "my tittle";
  value: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  incBy(event) {
    this.value += event;
  }

}
