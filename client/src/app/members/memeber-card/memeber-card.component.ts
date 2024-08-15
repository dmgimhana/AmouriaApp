import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Member } from '../../_models/member';

@Component({
  selector: 'app-memeber-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './memeber-card.component.html',
  styleUrl: './memeber-card.component.css',
})
export class MemeberCardComponent {
  member = input.required<Member>();
}
