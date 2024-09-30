import { Component, inject, input, output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TimeagoModule } from 'ngx-timeago';
import { Message } from '../../_models/message';
import { MessageService } from '../../_services/message.service';

@Component({
  selector: 'app-member-messages',
  standalone: true,
  imports: [TimeagoModule, FormsModule],
  templateUrl: './member-messages.component.html',
  styleUrl: './member-messages.component.css',
})
export class MemberMessagesComponent {
  @ViewChild('messageForm') messageFrom?: NgForm;
  private messageService = inject(MessageService);
  username = input.required<string>();
  messages = input.required<Message[]>();
  messageContent = '';
  updateMessages = output<Message>();

  sendMessage() {
    this.messageService
      .sendMessage(this.username(), this.messageContent)
      .subscribe({
        next: (message) => {
          this.updateMessages.emit(message);
          this.messageFrom?.reset();
        },
      });
  }
}
