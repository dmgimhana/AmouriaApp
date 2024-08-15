import { Component, inject, OnInit } from '@angular/core';
import { Member } from '../../_models/member';
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
  private membersService = inject(MembersService);
  members: Member[] = [];

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.membersService.getMembers().subscribe({
      next: (members) => (this.members = members),
    });
  }
}
