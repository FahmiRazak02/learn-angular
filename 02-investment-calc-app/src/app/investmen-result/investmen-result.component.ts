import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../user-input/investment.service';

@Component({
  selector: 'app-investmen-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investmen-result.component.html',
  styleUrl: './investmen-result.component.css',
})
export class InvestmenResultComponent {
  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.investmentResult());
  // results = this.investmentService.investmentResult.asReadonly(); optional when the compute only call and now mutate anything
}
