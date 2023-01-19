import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodById(id: number): Foods {
    return this.getAll().find((food) => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Launch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'aaa',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/img/1.jpg',
        tags: ['FastFood', 'Launch'],
      },
      {
        id: 2,
        name: 'aaab',
        cookTime: '10-20',
        price: 20,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/img/1.jpg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 3,
        name: 'aaac',
        cookTime: '10-20',
        price: 30,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/img/1.jpg',
        tags: ['Pizza', 'Launch'],
      },
      {
        id: 4,
        name: 'aaad',
        cookTime: '10-20',
        price: 40,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/img/1.jpg',
        tags: ['Pizza', 'SlowFood'],
      },
      {
        id: 5,
        name: 'aaae',
        cookTime: '10-20',
        price: 50,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/img/1.jpg',
        tags: ['Lunch', 'Hamburger', 'Fry'],
      },
      {
        id: 6,
        name: 'aaaf',
        cookTime: '10-20',
        price: 60,
        favorite: true,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/img/1.jpg',
        tags: ['FastFood', 'Hamburger', 'Lunch'],
      },
      {
        id: 7,
        name: 'aaag',
        cookTime: '10-20',
        price: 70,
        favorite: true,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/img/1.jpg',
        tags: ['Soup'],
      },
      {
        id: 8,
        name: 'aaah',
        cookTime: '10-20',
        price: 80,
        favorite: true,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/img/1.jpg',
        tags: ['FastFood', 'Fry', 'Lunch'],
      },
    ];
  }
}
