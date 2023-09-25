import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { of, Observable } from 'rxjs'
import { User } from '../models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  model: any = {};
  currentUser$: Observable<User | null> = of(null)

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: () => {
        this.router.navigateByUrl('/members')
      },
      error: error => this.toastr.error(error.error)
    })
    console.log(this.model)
  }

  async logout() {
    this.accountService.logout();
    await this.router.navigateByUrl('/')
  }

}
