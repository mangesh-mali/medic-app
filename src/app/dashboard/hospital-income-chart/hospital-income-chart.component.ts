import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-hospital-income-chart',
  templateUrl: './hospital-income-chart.component.html',
  styleUrls: ['./hospital-income-chart.component.css']
})
export class HospitalIncomeChartComponent {

  ngOnInit() {
    var myChart = new Chart('myChart1', {
      type: 'line',
      data: {
        labels: ['', '', '', '', '', '', '', '', '', '', '', ''],
        datasets: [{
          label: 'Income in Current Month',
          fill: {
            target: 'origin',
            above: '#f28892'
          },
          data: [94, 124, 132, 143, 138, 178, 194, 211, 234, 257, 241, 226],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],

          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    var myChart = new Chart('myChart2', {
      type: 'line',
      data: {
        labels: ['', '', '', '', '', '', '', '', '', '', '', ''],
        datasets: [{
          label: 'Income in Current Week',
          fill: {
            target: 'origin',
            above: '#98ccfc'
          },
          data: [138, 178, 194, 211, 234, 257, 241, 226, 94, 124, 132, 143],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            '#69b8f7'
          ],

          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
