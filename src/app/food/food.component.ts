import { Component } from '@angular/core';
import { FoodService } from '../food.service';
import { AsyncPipe } from '@angular/common';
import { tap } from 'rxjs';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [AsyncPipe],
  providers:[FoodService],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss',
})

export class FoodComponent {
  readonly name$ = this.foodService.name.pipe(tap(console.log))
  constructor(private foodService: FoodService ){
  }
}
