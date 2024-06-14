import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SkillsComponent } from './skills/skills.component';
import { WorksComponent } from './works/works.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, SkillsComponent, WorksComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
