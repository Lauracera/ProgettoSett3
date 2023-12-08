import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage.component';
import { LoginComponent } from './auth/login/login.component';
import { SignComponent } from './auth/sign/sign.component';
import { ProfileComponent } from './profile/profile.component';
import { Error404Component } from './error404/error404.component';
import { MovieService } from './service/movie.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [],
  exports: [RouterModule, FormsModule],
})
export class AppRoutingModule {}
