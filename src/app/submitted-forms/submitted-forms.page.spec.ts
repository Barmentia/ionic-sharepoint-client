import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedFormsPage } from './submitted-forms.page';

describe('SubmittedFormsPage', () => {
    let component: SubmittedFormsPage;
    let fixture: ComponentFixture<SubmittedFormsPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SubmittedFormsPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SubmittedFormsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
