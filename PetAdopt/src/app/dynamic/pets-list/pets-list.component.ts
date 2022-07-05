import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PetsList } from 'src/app/models/pets-list.model';
import { PetsService } from 'src/app/service/pets.service';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css'],
})
export class PetsListComponent implements OnInit {
  pets: PetsList = new PetsList();
  constructor(private service: PetsService, private router: Router) {}

  ngOnInit(): void {
    this.getPets();
  }

  params = {
    sort: 'name',
    filter: {
      sex: '',
      category: '',
    },
  };
  getPets(): void {
    this.service.getPets(this.params).subscribe({
      next: (pets: PetsList) => {
        console.log(pets);
        this.pets = pets;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  openPet(id: number) {
    this.router.navigate(['document', id]);
  }
}
