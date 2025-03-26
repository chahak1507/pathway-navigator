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
      name: 'Tech Academy',
      course: 'Software Development',
      contact: '123-456-7890',
      address: '123 Tech Street, Cityville'
    },
    {
      name: 'Data Science Hub',
      course: 'Data Science',
      contact: '234-567-8901',
      address: '456 Data Lane, Dataville'
    },
    {
      name: 'Health Institute',
      course: 'Healthcare Management',
      contact: '345-678-9012',
      address: '789 Health Blvd, Medicity'
    },
    {
      name: 'Coding Bootcamp',
      course: 'Software Development',
      contact: '456-789-0123',
      address: '101 Code Ave, Codetown'
    },
    {
      name: 'Design Studio',
      course: 'Graphic Design',
      contact: '567-890-1234',
      address: '102 Design Rd, Artcity'
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
