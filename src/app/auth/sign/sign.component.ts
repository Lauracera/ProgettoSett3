import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent implements OnInit {
  constructor(private authSrv: AuthService, private router: Router) {}

  ngOnInit(): void {}

  registration(form: NgForm) {
    console.log(form.value);
    try {
      this.authSrv.register(form.value).subscribe;
      this.router.navigate(['/login']);
    } catch (error: any) {
      console.log(error);
      if (error.status === 400) {
        alert('Email già registrata!');
        this.router.navigate(['/sign']);
      }
    }
  }
}
