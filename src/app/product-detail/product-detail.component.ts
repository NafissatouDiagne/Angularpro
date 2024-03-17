import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatToolbarModule,MatCardModule,MatGridListModule,CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  dataFromApi: any[]=[]; // Propriété pour stocker les données récupérées de l'API

  listes=[
    {
    id:0,
    url:'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'
    },
    {
      id:1,
      url:'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'

      }, {
        id:2,
        url:'https://material.angular.io/assets/img/examples/shiba2.jpg',
        description:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'

        },
  ];
  constructor(private apiService:ApiService){}
  ngOnInit(): void {
    this.getDataFromApi();
  }
  getDataFromApi(){
  this.apiService.getData().subscribe(
    (response => {
      this.dataFromApi=response;
      console.log('Données recuperer avec succès',this.dataFromApi);


    }),
    (error => {


      console.error('Erreur lors de l\'envoi des données:', error);

    })
  );}
  trackByFunction(index: number) {
    return index; // ou return item.id; si vous avez un identifiant unique pour chaque élément
  }

}

