import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent  implements OnInit {
  //Buttons
  @Input() text!: string;
  @Input() shape!: string; // Tipo predeterminado
  @Input() fill!: string; // Obligatorio
  @Input() size!: string;
  @Input() color!: string;
  @Input() expand!: string;
  constructor() { }

  ngOnInit() {}

}
