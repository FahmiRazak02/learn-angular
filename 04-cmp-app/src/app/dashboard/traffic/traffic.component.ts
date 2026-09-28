import { Component, inject, input } from '@angular/core';
import { TrafficService } from './traffic.service';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {
  trafficService = inject(TrafficService);

  dummyTrafficData = this.trafficService.getTrafficData ;
  maxTraffic = this.trafficService.getMaxTraffic
}
