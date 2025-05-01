import { Component } from '@angular/core';

@Component({
  selector: 'app-psychometric-test',
  templateUrl: './psychometric-test.component.html',
  styleUrls: ['./psychometric-test.component.css'],
})
export class PsychometricTestComponent {
  answers = {
  codeLove: '',
  uiDesign: '',
  cloudInfra: '',
  dataDriven: '',
  iotCuriosity: '',
  aiExcitement: '',
  hardwareHandsOn: '',
  bugHunting: '',
  cyberAware: '',
  techBiz: '',
  techWriting: '',
  leadership: '',
  innovation: '',
  seoInterest: '',
  backendPref: ''
};

  resultText = 'Take the test to see your result.';

  ngOnInit(): void {
    this.fetchUserPsychometricTest();
  }

  onSubmit() {
    const a = this.answers;

let result = 'Based on your responses, we suggest: ';

let suggestions = [];

if (a.codeLove === 'yes') suggestions.push('Software Development, Full Stack Development, or Backend Engineering');
if (a.uiDesign === 'yes') suggestions.push('UI/UX Design, Frontend Development, or Graphic Design');
if (a.cloudInfra === 'yes') suggestions.push('Cloud Engineering, DevOps, or Infrastructure Management');
if (a.dataDriven === 'yes') suggestions.push('Data Science, Data Analytics, or Business Intelligence');
if (a.iotCuriosity === 'yes') suggestions.push('IoT Development, Embedded Systems, or Automation Engineering');
if (a.aiExcitement === 'yes') suggestions.push('AI Engineering, Machine Learning, or Deep Learning Research');
if (a.hardwareHandsOn === 'yes') suggestions.push('Hardware Design, Robotics, or Embedded Programming');
if (a.bugHunting === 'yes') suggestions.push('Quality Assurance, Software Testing, or Test Automation');
if (a.cyberAware === 'yes') suggestions.push('Cybersecurity, Ethical Hacking, or Information Security');
if (a.techBiz === 'yes') suggestions.push('Product Management, Tech Entrepreneurship, or Solution Architecture');
if (a.techWriting === 'yes') suggestions.push('Technical Writing, Content Development, or Documentation');
if (a.leadership === 'yes') suggestions.push('Project Management, Scrum Master, or Technical Lead');
if (a.innovation === 'yes') suggestions.push('Startup Founder, R&D Engineer, or Innovation Strategist');
if (a.seoInterest === 'yes') suggestions.push('Digital Marketing, SEO Analytics, or Growth Hacking');
if (a.backendPref === 'yes') suggestions.push('Backend Development, Database Administration, or System Architecture');

if (suggestions.length > 0) {
  result += suggestions.join('; ') + '.';
} else {
  result += 'a multidisciplinary technical role like Tech Support, IT Services, or Digital Operations.';
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
      const response = await fetch(
        'https://pathway-navigator-backend.onrender.com/api/test',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(testSubmissionData),
        }
      );

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
        `https://pathway-navigator-backend.onrender.com/api/test/${user.email}`,
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
