import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [PostComponent, PostListComponent, PostDetailComponent],
  exports: [PostComponent, PostDetailComponent],
  imports: [CommonModule, FormsModule, PostRoutingModule],
})
export class PostModule {}
