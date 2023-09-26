import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class ServerErrorComponent {
  /**
   *
   */
  error: any;
  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation()
    this.error = nav?.extras?.state?.['error'];
    

  }
}
