import { Component } from '@angular/core';

@Component({
  selector: 'app-training-centers',
  templateUrl: './training-centers.component.html',
  styleUrls: ['./training-centers.component.css']
})
export class TrainingCentersComponent {
  // List of all available training centers with their details
  trainingCenters = [
    {
      name: 'SKIT Jaipur',
      course: 'Software Development',
      contact: '0141 350 0300',
      address: 'Jagatpura, Jaipur'
    },
    {
      name: 'Hadoop Big Data',
      course: 'Data Science',
      contact: '0141 350 0089',
      address: 'Vaishali Nagar, Jaipur'
    },
    {
      name: 'Coding Ninjas',
      course: 'Software Development',
      contact: '1800 123 3598',
      address: 'Tonk Road, Jaipur'
    },
    {
      name: 'Design Studio',
      course: 'Graphic Design',
      contact: '7014046584',
      address: 'Mansarovar, Jaipur'
    },
    {
      name: 'RedSketch Institute',
      course: 'Graphic Design',
      contact: '0141 254 2547',
      address: 'Malviya Nagar, Jaipur'
    },
    {
      name: 'Samyak Classes',
      course: 'Software Development',
      contact: '0141 254 7852',
      address: 'Gopalpura, Jaipur'
    },
    {
      name: 'Engineers Academy',
      course: 'Software Development',
      contact: '087644 74451',
      address: 'Jaipur'
    },
    {
      name: 'CyberCell Academy',
      course: 'Cybersecurity',
      contact: '0141 254 7482',
      address: 'Jaipur'
    },
    {
      name: 'Engineers Academy',
      course: 'Cybersecurity',
      contact: '087644 74451',
      address: 'Jaipur'
    }
  ];

  // Stores the currently selected course filter
  selectedCourse: string = '';

  // Filtered list of training centers based on selected course
  filteredCenters = this.trainingCenters;

  // Array of unique courses for the dropdown filter
  uniqueCourses = Array.from(new Set(this.trainingCenters.map(center => center.course)));

  // Method to filter training centers based on the selected course
  filterTrainingCenters() {
    if (this.selectedCourse) {
      this.filteredCenters = this.trainingCenters.filter(center => center.course === this.selectedCourse);
    } else {
      this.filteredCenters = this.trainingCenters;
    }
  }
}
