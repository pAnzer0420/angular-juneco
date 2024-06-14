import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { SkillsComponent } from './skills/skills.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  { path: '', redirectTo: '/hero', pathMatch: 'full' },
  { path: 'hero', component: HeroComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'works', component: WorksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
