import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { OnInit } from '@angular/core';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent], // Import the standalone ButtonComponent
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
  });

  it('should set backgroundColor to green when name is "Increase"', () => {
    // Arrange
    component.name = 'Increase';
    component.ngOninit(); // Trigger ngOnInit to call colors()

    // Act & Assert
    expect(component.backgroundColor).toBe('green');
  });

  it('should set backgroundColor to yellow when name is "Decrease"', () => {
    // Arrange
    component.name = 'Decrease';
    component.ngOninit(); // Trigger ngOnInit to call colors()

    // Act & Assert
    expect(component.backgroundColor).toBe('yellow');
  });

  it('should set backgroundColor to red for any other name', () => {
    // Arrange
    component.name = 'Other';
    component.ngOninit(); // Trigger ngOnInit to call colors()

    // Act & Assert
    expect(component.backgroundColor).toBe('red');
  });
});