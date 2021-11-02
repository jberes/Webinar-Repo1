import { Component, OnInit } from '@angular/core';
import { WebinarRestCustomerService } from '../services/webinar-rest-customer.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit {
  public webinarRestCustomerCustomersWebinar: any = null;

  constructor(
    private webinarRestCustomerService: WebinarRestCustomerService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.webinarRestCustomerService.getCustomersWebinar().subscribe(data => this.webinarRestCustomerCustomersWebinar = data);
  }
}
