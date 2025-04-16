import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Career {
  _id: string;
  title: string;
  description: string;
  category: string;
  averageSalary: number;
  requiredSkills: string[];
  educationRequirements: string;
  imageUrl: string;
  jobOutlook: string;
}

@Component({
  selector: 'app-career-details',
  templateUrl: './career-details.component.html',
  styleUrls: ['./career-details.component.css'],
})
export class CareerDetailsComponent {
  careerPath: Career | null = null;
  loading = true;
  error: string | null = null;
  private apiUrl = 'https://pathway-navigator-backend.onrender.com/api';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const careerId = params.get('id');
      if (careerId) {
        this.fetchCareerDetails(careerId);
      }
    });
  }

  async fetchCareerDetails(id: string) {
    this.loading = true;
    try {
      const response = await fetch(`${this.apiUrl}/career-paths/${id}`);
      this.careerPath = await response.json();
    } catch (error) {
      this.error = 'Failed to load course details';
    } finally {
      this.loading = false;
    }
  }

  getSalaryFormatted(salary: number): string {
    return salary ? `$${salary.toLocaleString()}` : 'Not specified';
  }

  getJobOutlookClass(outlook: string): string {
    if (!outlook) return '';

    const outlookLower = outlook.toLowerCase();
    if (outlookLower.includes('excellent')) return 'excellent';
    if (outlookLower.includes('good')) return 'good';
    if (outlookLower.includes('average')) return 'average';
    if (outlookLower.includes('poor')) return 'poor';
    return '';
  }
}
