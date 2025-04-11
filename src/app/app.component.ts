import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  messages: { text: string; sender: string; time: string }[] = [];
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      const messageData = {
        text: this.newMessage,
        sender: 'Moi',
        time: new Date().toLocaleTimeString()
      };
      this.messages.push(messageData);
      this.newMessage = '';
    }
  }

}
