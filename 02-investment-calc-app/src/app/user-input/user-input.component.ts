import { Component, inject, signal } from '@angular/core';
import { InvestmentInput } from './user-input.model';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  private investmentService = inject(InvestmentService);

  values = signal<InvestmentInput>({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 5,
    duration: 10,
  });

  onSubmit = () => {
    console.log(
      `
      Submitted 
      1. ${this.values().initialInvestment} 
      2. ${this.values().annualInvestment}
      3. ${this.values().expectedReturn}
      4. ${this.values().duration}
      `,
    );
    
    this.investmentService.calculateInvestmentResults(this.values());

    this.values.set({
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 5,
      duration: 10,
    });
  };
}
