import { Component, EventEmitter, Output } from '@angular/core';
import { userInput } from './user-input.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<userInput>();

  values: userInput = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  };

  onSubmit = () => {
    console.log(
      `
      Submitted 
      1. ${this.values.initialInvestment}
      2. ${this.values.annualInvestment}
      3. ${this.values.expectedReturn}
      4. ${this.values.duration}
      `,
    );
    this.calculate.emit({
      initialInvestment: +this.values.initialInvestment,
      annualInvestment: +this.values.annualInvestment,
      expectedReturn: +this.values.expectedReturn,
      duration: +this.values.duration,
    });
  };
}
