import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocumentationComponent } from './documentation/documentation.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
   
},
  {
    path: 'home',
    component: HomeComponent
   
},
{
  path: 'documentation',
  component: DocumentationComponent
 
},

];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
