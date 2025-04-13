import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-edit-catbox',
  standalone: false,
  templateUrl: './add-edit-catbox.component.html',
  styleUrl: './add-edit-catbox.component.css'
})
export class AddEditCatboxComponent {
  contactForm: FormGroup;
  submissionStatus: 'success' | 'error' | null = null;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      type: ['', [Validators.required ]],
      size: ['', [Validators.required]],
      subject: ['', [Validators.required, Validators.maxLength(50)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  isVisible = false;
  isSelectVisible = false;
  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  toggleSelectVisibility() {
    this.isSelectVisible = !this.isSelectVisible;
  }
  get type() {
    return this.contactForm.get('type');
  }

  get size() {
    return this.contactForm.get('size');
  }

  get subject() {
    return this.contactForm.get('subject');
  }

  get message() {
    return this.contactForm.get('message');
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Feedback Submitted!', this.contactForm.value);
      this.submissionStatus = 'success';
    } else {
      console.log('Form is valid!');
    }

    setTimeout(() => {
      this.submissionStatus = null;
    }, 5000);
  }
}
