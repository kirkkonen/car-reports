import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { GenerationComponent } from './generation/generation.component';
import { ReportComponent } from './report/report.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'generations', component: GenerationComponent },
  { path: 'reports', component: ReportComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
