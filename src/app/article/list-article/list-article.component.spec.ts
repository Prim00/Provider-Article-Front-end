import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArticleComponent } from './list-article.component';

describe('ListArticleComponent', () => {
  let component: ListArticleComponent;
  let fixture: ComponentFixture<ListArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
