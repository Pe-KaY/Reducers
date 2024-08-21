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
      this.backgroundColor = '#96c93c';
    else if(this.name === 'Decrease'){
      this.backgroundColor = '#d6c347';
    }
    else{
      this.backgroundColor = '#fc5a03';
    }
  }

  ngOnInit(){
    this.colors();
  }

}
