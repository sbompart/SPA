import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string = '';

  constructor( private activatedRoute: ActivatedRoute,
               private router : Router,
               private heroesService: HeroesService ) {

    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.getBuscarHeroe(params['termino']);
    });
  }

  ngOnInit() {
  }

  verHeroe(index){
    this.router.navigate(['/heroe',index]);
  }

}
