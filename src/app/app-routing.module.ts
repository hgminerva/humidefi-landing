import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Modules/about/about.component';
import { TokensComponent } from './Modules/tokens/tokens.component'
import { Web3Component }from './Modules/technology/web3/web3.component';
import { StackComponent } from './Modules/technology/stack/stack.component';
import { LandingComponent } from './Modules/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'tokens',
    component: TokensComponent
  },
  {
    path: 'web3',
    component: Web3Component
  },
  {
    path: 'stack',
    component: StackComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
