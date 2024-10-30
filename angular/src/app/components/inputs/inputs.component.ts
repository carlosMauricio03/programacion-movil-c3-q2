import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
})
export class InputsComponent  implements OnInit {
  @Input() id!: string; // Obligatorio
  @Input() type!: string; // Tipo predeterminado
  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() labelPlacement!: string;
  @Input() autocomplete!: string;

  constructor() { }

  ngOnInit() {}

}
