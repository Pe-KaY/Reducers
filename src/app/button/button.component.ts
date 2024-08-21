import { Component } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() name!: string;

  backgroundColor!: string

  colors():void{
    if(this.name === 'Increase')
      this.backgroundColor = 'green';
    else if(this.name === 'Decrease'){
      this.backgroundColor = 'yellow';
    }
    else{
      this.backgroundColor = 'red';
    }
  }

  ngOninit(){
    this.colors();
  }

}
