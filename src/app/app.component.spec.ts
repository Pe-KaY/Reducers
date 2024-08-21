import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { Store } from '@ngrx/store';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Import your components and modules
      providers: [
        provideMockStore({
          // Provide initial state and selectors if needed
          selectors: []
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore; // Cast Store to MockStore

    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // Add more tests as needed
});