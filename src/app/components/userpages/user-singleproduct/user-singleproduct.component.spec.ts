import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSingleproductComponent } from './user-singleproduct.component';

describe('UserSingleproductComponent', () => {
  let component: UserSingleproductComponent;
  let fixture: ComponentFixture<UserSingleproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSingleproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSingleproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
