import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../service/client-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {

  get firstName() {
    return this.clientForm.get('firstName');
  }
  get lastName() {
    return this.clientForm.get('lastName');
  }
  get tax() {
    return this.clientForm.get('taxNumber');
  }
  clientForm = this.fb.group({
    firstName: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(13),
        Validators.pattern('^[A-Za-z]+$')
      ])
    ],
    lastName: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(13),
        Validators.pattern('^[A-Za-z]+$')
      ])
    ],
    taxNumber: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
        Validators.pattern('^[0-9]+$')
      ])
    ]
  });

  clientService: ClientService;
  constructor(private fb: FormBuilder, clientService: ClientService, private router: Router) {
    this.clientService = clientService;
  }

  ngOnInit() {}

  handleSubmit(event: Event) {
    event.preventDefault();
    this.clientService.clients.push(this.clientForm.value);
    this.router.navigate(['/clients']);
  }
}
