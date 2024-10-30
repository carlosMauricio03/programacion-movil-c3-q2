import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css'],
})
export class LabelsComponent  implements OnInit {
  @Input() id!: string; // Obligatorio
  @Input() text!: string;
  @Input() position!: string; // Tipo predeterminado
  @Input() color!: string;
  constructor() { }

  ngOnInit() {}

}
