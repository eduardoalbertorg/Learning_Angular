import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Enchiladas de pollo', 'Son enchiladas y tienen pollo', 'https://images-gmi-pmc.edge-generalmills.com/0f58d310-021e-4175-b1b6-d73be26bac7e.jpg'),
    new Recipe('Pollo Qinn', 'Es adictivo', 'https://www.qin.mx/img/img_carrusel_02.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
