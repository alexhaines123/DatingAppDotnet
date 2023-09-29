import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { faAddressBook, faEnvelope, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],
})
export class MemberCardComponent implements OnInit {
  @Input() member: Member | undefined
  faUser = faUser
  faEnvelope = faEnvelope
  faHeart = faHeart

  /**
   *
   */
  constructor() {

  }

  ngOnInit(): void {

  }
}
