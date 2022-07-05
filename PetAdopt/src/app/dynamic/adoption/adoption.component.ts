import { Component, OnInit } from '@angular/core';
import { Adoption, AdoptionList } from 'src/app/models/adopton.model';
import { PetsService } from 'src/app/service/pets.service';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css'],
})
export class AdoptionComponent implements OnInit {
  adoptions: AdoptionList = new AdoptionList();
  constructor(private service: PetsService) {}

  ngOnInit(): void {
    this.getAdoptions();
  }

  getAdoptions(): void {
    this.service.getAdoptions().subscribe({
      next: (adoptions: AdoptionList) => {
        console.log(adoptions);
        this.adoptions = adoptions;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  deleteAdoption(adoptionId: number) {
    this.service.deleteAdoption(adoptionId).subscribe((x) => {
      console.log('Uspesno obrisano');
      this.getAdoptions();
    });
  }
}
