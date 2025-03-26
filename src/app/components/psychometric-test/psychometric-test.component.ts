import { Component } from '@angular/core';

@Component({
  selector: 'app-psychometric-test',
  templateUrl: './psychometric-test.component.html',
  styleUrls: ['./psychometric-test.component.css'],
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
    business: '',
  };

  resultText = 'Take the test to see your result.';

  ngOnInit(): void {
    this.fetchUserPsychometricTest();
  }

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
      result +=
        'A multidisciplinary career like Project Management or Digital Marketing.';
    }

    this.resultText = result;
    this.submitPsychometricTest(result);
  }

  async submitPsychometricTest(resultText: string) {
    try {
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUSer')!);

      if (!loggedInUser || !loggedInUser.email) {
        throw new Error('No logged-in user found');
      }
      const testSubmissionData = {
        resultText,
        email: loggedInUser.email,
      };

      // Make the POST request
      const response = await fetch('http://localhost:3000/api/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testSubmissionData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Failed to submit psychometric test'
        );
      }
    } catch (error) {
      console.error('Error submitting psychometric test:', error);
    }
  }

  async fetchUserPsychometricTest() {
    try {
      const storedUser = localStorage.getItem('loggedInUSer');
      if (!storedUser) throw new Error('No authenticated user found');
      const user = JSON.parse(storedUser);

      const response = await fetch(
        `http://localhost:3000/api/test/${user.email}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 404) {
        return null;
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Failed to fetch psychometric test'
        );
      }

      const testData = await response.json();
      if (testData && testData.resultText)
        this.resultText = testData.resultText;

      return testData;
    } catch (error) {
      // Log the error and rethrow or handle as needed
      console.error('Error fetching psychometric test:', error);
      throw error;
    }
  }
}
