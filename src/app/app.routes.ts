import { Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:'skills',component:SkillsComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'home',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'**',redirectTo:'home'}
];
