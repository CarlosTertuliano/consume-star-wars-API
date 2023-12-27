import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/Planet';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets : Planet[] = [];
  page : number = 1;
  constructor(private planeteService : PlanetsService) { }

  ngOnInit(): void {
    this.planeteService.getAllPlanets(this.page).subscribe(
      (results) => {
        this.planets = results.results;
      },
      (error) => {
        console.error('Erro ao obter planetas:', error);
      }
    );
  }

  changePage(next : boolean) : void{
    if(next){
      this.page++;
    } else {
      this.page--;
    }
    this.planeteService.getAllPlanets(this.page).subscribe(
      (results) => (this.planets = results.results, console.log(this.planets))
    );
  }
}
