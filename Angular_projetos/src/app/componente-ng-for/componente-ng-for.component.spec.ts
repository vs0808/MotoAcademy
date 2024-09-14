import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteNgForComponent } from './componente-ng-for.component';

describe('ComponenteNgForComponent', () => {
  let component: ComponenteNgForComponent;
  let fixture: ComponentFixture<ComponenteNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteNgForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
