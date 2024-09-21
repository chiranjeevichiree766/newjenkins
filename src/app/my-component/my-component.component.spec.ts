import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentComponent } from './my-component.component';

describe('MyComponentComponent', () => {
  let component: MyComponentComponent;
  let fixture: ComponentFixture<MyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [MyComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponentComponent);
    component = fixture.componentInstance;
    component.title = 'Expected Title'; // Set the title
    fixture.detectChanges(); // Trigger change detection
});

it('should create', () => {
  expect(component).toBeTruthy();
});

// it('should have a default title', () => {
//   expect(component.title).toEqual('Hello, Angular!');
// });

it('should render title in a h1 tag', () => {
  const compiled = fixture.nativeElement;
  expect(compiled.querySelector('h1').textContent).toContain('Expected Title');
});
});
