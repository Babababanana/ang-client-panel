import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };

  disableBalanceOnAdd: boolean = true;

  @ViewChild('clientForm') form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Client, valid: boolean}) {
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', grayout: 4000
      });
    } else {
      this.clientService.newClient(value);
      this.flashMessage.show('New client added', {
        cssClass: 'alert-success', grayout: 4000
      });
      this.router.navigate(['/']);
    }
  }

}
