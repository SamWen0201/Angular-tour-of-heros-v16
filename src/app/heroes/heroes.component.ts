import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  // };
  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
  ) {}

  heroes: Hero[] = [];
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: ${hero.name} is selected`); // add message
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes(); // synchronous
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes)); // asynchronous
  }

  add(name: string): void {
    console.log('add hero');
    name = name.trim(); // 移除頭尾空白
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push();
    });
  }

  delete(hero: Hero): void {
    this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
