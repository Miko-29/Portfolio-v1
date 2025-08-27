import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: [], // Tailwind CSS is typically configured globally
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App{
  title = 'Portfolio-v1';
scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  // Use a signal to manage the form data
  formData = {
    name: '',
    email: '',
    message: ''
  };

  statusMessage = signal<string | null>(null);
  isSuccess = signal<boolean>(false);

  // Initialize EmailJS in the constructor
  constructor() {
    emailjs.init({
      publicKey: environment.EMAILJS_USER_ID,,
    });
  }

  /**
   * Handles form submission and sends the email using the EmailJS SDK.
   */
  async sendEmail() {
    // You can add additional validation here before sending
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.statusMessage.set('Please fill in all required fields.');
      this.isSuccess.set(false);
      return;
    }

    try {
      const result = await emailjs.send(
         environment.EMAILJS_SERVICE_ID, 
  environment.EMAILJS_TEMPLATE_ID,     
        this.formData,         
      );
      
      console.log('SUCCESS!', result.status, result.text);
      this.statusMessage.set('Message sent successfully!');
      this.isSuccess.set(true);

      // Clear the form fields after successful submission
      this.formData = { name: '', email: '', message: '' };

    } catch (error) {
      console.error('FAILED...', error);
      this.statusMessage.set('Failed to send message. Please try again later.');
      this.isSuccess.set(false);
    }
  }
}

