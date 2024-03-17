import { ApiService } from './../api.service';
import { Component, ViewChild } from '@angular/core';
import {
  CdkDragDrop,
  CdkDropList,
  CdkDragPreview,
  CdkDrag,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { NavbarComponent } from '../navbar/navbar.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, NgForm} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CdkDropList,CdkDrag,CdkDragPreview,MatFormFieldModule,
    MatInputModule,FormsModule,MatButton,HttpClientModule,
    MatSnackBarModule,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 // @ViewChild('form') form!: NgForm;
/*  movies = [
    {
      id:1,
      title: 'Episode I - The Phantom Menace',
      poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg',
    },
    {
      id:2,
      title: 'Episode II - Attack of the Clones',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg',
    },
    {
      id:3,
      title: 'Episode III - Revenge of the Sith',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg',
    },
    {
      id:4,
      title: 'Episode IV - A New Hope',
      poster: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg',
    },

    {
      id:5,
      title: 'Episode V - The Empire Strikes Back',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg',
    },
    {
      id:6,
      title: 'Episode VI - Return of the Jedi',
      poster: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg',
    },
    {
      id:7,
      title: 'Episode VII - The Force Awakens',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg',
    },
    {
      id:8,
      title: 'Episode VIII - The Last Jedi',
      poster: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg',
    },
    {
      id:9,
      title: 'Episode IX – The Rise of Skywalker',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg',
    },
  ];
*/
  dataApi = {
title: '',
description:'',
imageUrl:'',
price:'',

  };
  message= '';
  constructor(private apiService:ApiService,private _snackBar:MatSnackBar){}

  submitFormToApi(form:NgForm){
    if (form.valid) {
      this.dataApi={
      title :form.value.title,
      description :form.value.description,
      imageUrl :form.value.imageUrl,
      price :form.value.price,}
    this.apiService.postData(this.dataApi).subscribe(
      (response => {
        this.message='Données envoyées avec succès';
        this.openSnackBar();
        console.log(this.message,response);
        console.log('dataApi', this.dataApi)

      }),
      (error => {
        this.message='Erreur lors de l\'envoi des données:';
        this.openSnackBar();

        console.error(this.message, error);
        console.log('dataApi', this.dataApi)
console.log('form', form.value)

      })
    );

  }
  else{
    this.message='Formulaire Invalid ';
    this.openSnackBar();

    console.log(this.message)  }
}
openSnackBar(){
  this._snackBar.open(this.message,'X',{
    duration:2000,
  })
}

/*redirectToPage(index:number){
  this.router.navigate(['/product-detail',index]);
}
  drop(event: CdkDragDrop<{title: string; poster: string}[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }*/
}
