import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';

// letsee
import { increment, decrement, reset, initialValue} from '../store/counter.actions';
import { Store } from '@ngrx/store';
import { ButtonComponent } from '../button/button.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { getCurrentCount } from '../selector/counters.selector';
import { CommonModule } from '@angular/common';


describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;
  let store: MockStore;
  let dispatchSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, ButtonComponent, DisplayComponent],
      providers: [
        provideMockStore({
          selectors: [
            { selector: getCurrentCount, value: 0 } // Mocked selector value
          ]
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;

    dispatchSpy = jest.spyOn(store, 'dispatch');
    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should dispatch increment action when increment method is called', () => {
    // Arrange
    const incrementAction = increment();

    // Act
    component.increment();

    // Assert
    expect(dispatchSpy).toHaveBeenCalledWith(incrementAction);
  });
  it('should dispatch decrement action when decrement method is called', () => {
    // Arrange
    const decrementAction = decrement();

    // Act
    component.decrement();

    // Assert
    expect(dispatchSpy).toHaveBeenCalledWith(decrementAction);
  });

  it('should dispatch reset action when reset method is called', () => {
    // Arrange
    const resetAction = reset();

    // Act
    component.reset();

    // Assert
    expect(dispatchSpy).toHaveBeenCalledWith(resetAction);
  });

  it('should dispatch initialValue action with correct number when setInitialNum is called', () => {
    // Arrange
    const initialValueAction = initialValue({ num: 5 });
    const event = { target: { value: '5' } } as any;

    // Act
    component.setInitialNum(event);

    // Assert
    expect(dispatchSpy).toHaveBeenCalledWith(initialValueAction);
  });
});
