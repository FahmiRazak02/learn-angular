import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmenResultComponent } from './investmen-result/investmen-result.component';
import { InvestmentResult } from './investmen-result/investment-result.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmenResultComponent],
})
export class AppComponent {
  investmentResult = signal<InvestmentResult[] | undefined>(undefined);
}
