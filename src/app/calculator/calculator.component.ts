import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  weight = 130;
  height = 69;
  bmi = Math.round(((this.weight / (this.height * this.height)) * 703) * 10) / 10;
  bmiCategories = ['Congrats! Your BMI is Normal', 'Oh! You are Underweight', 'Overweight!!! 😧😧'];
  bmiText = this.bmiCategories[0];

  bmiPercent = (this.bmi - 13.1) / 18.2 * 100;
  bmiPercentDisplayVal = this.bmiPercent;

  constructor() { }

  ngOnInit(): void {
  }

  updateBMI () {
    this.bmi = Math.round(((this.weight / (this.height * this.height)) * 703) * 10) / 10;
    
    if (this.bmi < 18.5) {
      this.bmiText = this.bmiCategories[1];
    } else if (this.bmi > 24.9) {
      this.bmiText = this.bmiCategories[2];
    } else {
      this.bmiText = this.bmiCategories[0];
    }

    this.updateBMIPercent();
  }

  updateBMIPercent() {
    this.bmiPercent = (this.bmi - 13.1) / 18.2 * 100;

    if (this.bmiPercent < 0) {
      this.bmiPercentDisplayVal = 0;
    } else if (this.bmiPercent > 100) {
      this.bmiPercentDisplayVal = 100;
    } else {
      this.bmiPercentDisplayVal = this.bmiPercent;
    }
  }

}
