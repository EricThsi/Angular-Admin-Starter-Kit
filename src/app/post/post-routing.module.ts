import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  {
    path: 'posts/:id',
    component: PostDetailComponent,
  },
  {
    path: 'posts',
    component: PostListComponent,
  },
  {
    path: '**',
    redirectTo: 'posts',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
