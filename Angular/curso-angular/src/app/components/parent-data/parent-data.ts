import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  standalone:true,
  imports: [],
  templateUrl: './parent-data.html',
  styleUrl: './parent-data.css'
})

export class ParentData {
  @Input() name: string = '';
  @Input() userData!: {email: string; role: string}; 
}


