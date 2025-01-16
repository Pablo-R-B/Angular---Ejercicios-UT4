import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooVirtualComponent } from './zoo-virtual.component';

describe('ZooVirtualComponent', () => {
  let component: ZooVirtualComponent;
  let fixture: ComponentFixture<ZooVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZooVirtualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
