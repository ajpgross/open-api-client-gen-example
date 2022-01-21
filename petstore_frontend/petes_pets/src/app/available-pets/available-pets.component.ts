import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvailablePetsService } from './available-pets.service';
import { IPet } from './interfaces';

@Component({
  selector: 'app-available-pets',
  templateUrl: './available-pets.component.html'
})
export class AvailablePetsComponent implements OnInit {

  public availablePets: IPet[] = [];
  public soldPets: IPet[] = [];

  public links = [
    { title: 'Available Pets', fragment: 'available' },
    { title: 'Sold Pets', fragment: 'sold' }
  ];

  constructor(public route: ActivatedRoute, private petsService: AvailablePetsService) { }

  ngOnInit(): void {
    this.petsService.getAllAvailablePets()
      .subscribe(pets => this.availablePets = pets);

    this.petsService.getAllSoldPets()
      .subscribe(pets => this.soldPets = pets);
  }
}
