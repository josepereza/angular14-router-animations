import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
personajes:any[]=[];
texto:string=''
name = new FormControl('');
  constructor(private apiService:ApiService) { }

  ngOnInit(): void { 
    this.getAll('')
    this.name.valueChanges
    .pipe(
      map((search: string | null) => search!.trim()),
      debounceTime(350),
      distinctUntilChanged(),
        ).
       
    subscribe(data=>{

     
      this.getAll((data))
    })

   
   
  }
getAll(texto:string | null){
  console.log('texto del listado',texto)
  this.apiService.getAll(texto).subscribe((data:any)=>{
    this.personajes=data.results
    console.log(this.personajes)
   
  })
}
}
