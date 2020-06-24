import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  private _name = "";

  @Input()
  set name(aValue: string) {
    if (aValue !== '')
      this._name = "Your name: " + aValue
    else
      this._name = ''
  };

  get name(): string {
    return this._name;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
