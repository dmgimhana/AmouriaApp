import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Member } from '../../_models/member';
import { LikesService } from '../../_services/likes.service';

@Component({
  selector: 'app-memeber-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './memeber-card.component.html',
  styleUrl: './memeber-card.component.css',
})
export class MemeberCardComponent {
  private likeService = inject(LikesService);
  member = input.required<Member>();
  hasLiked = computed(() =>
    this.likeService.likeIds().includes(this.member().id)
  );

  toggleLike() {
    this.likeService.toggleLike(this.member().id).subscribe({
      next: () => {
        if (this.hasLiked()) {
          this.likeService.likeIds.update((ids) =>
            ids.filter((x) => x !== this.member().id)
          );
        } else {
          this.likeService.likeIds.update((ids) => [...ids, this.member().id]);
        }
      },
    });
  }
}
