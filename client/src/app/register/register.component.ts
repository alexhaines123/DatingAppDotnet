import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() cancelRegister = new EventEmitter()
  model: any = {}

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  register() {
    console.log(this.model)
    this.accountService.register(this.model).subscribe({
      next: response => {
        console.log(response)
        this.cancel()
      },
      error: error => this.toastr.error(error.error)
    })
  }
  cancel() {
    console.log('cancel')
    this.cancelRegister.emit(false)
  }
}
