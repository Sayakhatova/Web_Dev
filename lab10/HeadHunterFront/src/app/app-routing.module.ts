import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { VacanciesComponent } from './vacancies/vacancies.component';

const routes: Routes = [
  {path: 'companies', component: CompaniesComponent},
  {path: 'companies/:id/vacancies', component: VacanciesComponent},
  {path: '', redirectTo: 'companies', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
