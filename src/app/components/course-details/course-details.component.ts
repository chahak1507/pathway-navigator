import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Course {
  _id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: string;
  price: number;
  imageUrl: string;
  topics: string[];
  ratings?: {
    average: number;
    count: number;
  };
}

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  course: Course | null = null;
  loading = true;
  error: string | null = null;
  private apiUrl = 'https://pathway-navigator-backend.onrender.com/api';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const courseId = params.get('id');
      if (courseId) {
        this.fetchCourseDetails(courseId);
      }
    });
  }

  async fetchCourseDetails(id: string) {
    this.loading = true;
    try {
      const response = await fetch(`${this.apiUrl}/courses/${id}`);
      this.course = await response.json();
    } catch (error) {
      this.error = 'Failed to load course details';
    } finally {
      this.loading = false;
    }
  }
}
