import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DogsService } from './dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private dogsService: DogsService) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      breed: ['', Validators.required],
      owner: ['', Validators.required],
      document: ['', Validators.required]
    });

  }

  ngOnInit(): void{
    this.getAllDogs();
  }

  getAllDogs() {
    this.dogsService.getAllDogs().subscribe({
      next: (data: any) => {
        console.log(data)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

}
