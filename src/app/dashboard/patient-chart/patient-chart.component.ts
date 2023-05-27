import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-patient-chart',
  templateUrl: './patient-chart.component.html',
  styleUrls: ['./patient-chart.component.css']
})
export class PatientChartComponent {

  ngOnInit() {
    var myChart = new Chart('myChart11', {
      type: 'doughnut',
      data: {
        labels: [
          '0-18',
          '18-45',
          '45+'
        ],
        datasets: [{
          label: '',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      }
    });

    var temp1 = new Chart('myChart12', {
      type: 'pie',
      data: {
        labels: [
          'Male',
          'Female'
        ],
        datasets: [{
          label: '',
          data: [52, 48],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
          ],
          hoverOffset: 4
        }]
      }
    });

    var temp2 = new Chart('myChart13', {
      type: 'polarArea',
      data: {
        labels: [
          'Gynecology',
          'Cardiology',
          'Dentistry',
          'Laboratory',
          'Pulmonology'
        ],
        datasets: [{
          label: '',
          data: [219, 115, 173, 154, 180],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          hoverOffset: 4
        }]
      }
    });
  }
}
