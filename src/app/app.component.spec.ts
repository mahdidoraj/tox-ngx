import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
// import { AlertComponent } from './shared/components/alert/alert.component';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { SharedModule } from './shared/shared.module';
// import { TranslateModule } from '@ngx-translate/core';

import { ServicesModule } from './shared/services/services.module';
import { SharedComponentsModule } from './shared/components/shared-components.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        // NgbModule.forRoot(),
        // TranslateModule.forRoot(),
        // SharedModule,

        ServicesModule.forRoot(),
        SharedComponentsModule,
      ],
      declarations: [
        AppComponent,
        // AlertComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'tox works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('tox works!');
  }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('tox works!');
  // }));
});
