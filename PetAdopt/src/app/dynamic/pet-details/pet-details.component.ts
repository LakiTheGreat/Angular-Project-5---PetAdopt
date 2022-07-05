import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Adoption } from 'src/app/models/adopton.model';
import { Pet } from 'src/app/models/pets-list.model';
import { PetsService } from 'src/app/service/pets.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css'],
})
export class PetDetailsComponent implements OnInit {
  pet: Pet = new Pet();
  petId: number = 0;
  adoption: Adoption = new Adoption();

  constructor(
    private service: PetsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.petId = params['id'];
      // console.log(this.petId);
      this.getPet();
    });
  }

  getPet() {
    this.service.getPet(this.petId).subscribe({
      next: (data: Pet) => {
        console.log(data);
        this.pet = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  postAdoption(): void {
    this.service.postAdoption(this.adoption).subscribe({
      next: (data: Adoption) => {
        console.log(data);
        alert('Uspesno je dodato');
      },
      error: (err: any) => alert(JSON.stringify(err)),
    });
  }

  submitAdoption() {
    this.adoption.petId = this.petId;
    this.adoption.petName = this.pet.name;
    this.postAdoption();
    this.redirect();
  }

  redirect() {
    this.router.navigate(['adoption']);
  }
}
