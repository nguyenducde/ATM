import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalUserPage } from './detal-user.page';

describe('DetalUserPage', () => {
  let component: DetalUserPage;
  let fixture: ComponentFixture<DetalUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
