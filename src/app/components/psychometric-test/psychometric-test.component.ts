import { Component } from '@angular/core';

@Component({
  selector: 'app-psychometric-test',
  templateUrl: './psychometric-test.component.html',
  styleUrls: ['./psychometric-test.component.css']
})
export class PsychometricTestComponent {
  answers = {
    indoors: '',
    handsOn: '',
    technology: '',
    helpingPeople: '',
    physicalWork: '',
    problemSolving: '',
    teamwork: '',
    numbers: '',
    creativity: '',
    business: ''
  };

  resultText = 'Take the test to see your result.';

  onSubmit() {
    const answers = this.answers;

    let result = 'Based on your responses, we suggest: ';

    if (answers.technology === 'yes' && answers.problemSolving === 'yes') {
      result += 'Software Development, Data Science, or IT Support.';
    } else if (answers.handsOn === 'yes' && answers.physicalWork === 'yes') {
      result += 'Construction, Electrical Work, or Automotive Engineering.';
    } else if (answers.helpingPeople === 'yes') {
      result += 'Healthcare, Teaching, or Social Work.';
    } else if (answers.indoors === 'outdoors') {
      result += 'Agriculture, Forestry, or Environmental Science.';
    } else if (answers.creativity === 'yes') {
      result += 'Graphic Design, Writing, or Media Production.';
    } else if (answers.numbers === 'yes') {
      result += 'Accounting, Finance, or Data Analytics.';
    } else if (answers.business === 'yes') {
      result += 'Entrepreneurship, Marketing, or Business Administration.';
    } else {
      result += 'A multidisciplinary career like Project Management or Digital Marketing.';
    }

    this.resultText = result;
  }
}
