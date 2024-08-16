import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from '../../_services/members.service';
import { MemeberCardComponent } from '../memeber-card/memeber-card.component';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [MemeberCardComponent],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css',
})
export class MemberListComponent implements OnInit {
  membersService = inject(MembersService);

  ngOnInit(): void {
    if (this.membersService.members().length === 0) this.loadMembers();
  }

  loadMembers() {
    this.membersService.getMembers();
  }
}
