import Vue from 'vue';
import Router from 'vue-router';

import SingleFilm from '../pages/Films/SingleFilm';
import Films from '../pages/Films';

import Character from '../pages/Character';

import Planets from '../pages/Planets';

import Species from '../pages/Species';

import Vehicles from '../pages/Vehicles';

import Starships from '../pages/Starships';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Films,
    },
    {
      path: '/:id',
      name: 'SingleFilm',
      component: SingleFilm,
    },
    {
      path: '/:id/character',
      name: 'Characters',
      component: Character,
    },
    {
      path: '/:id/planets',
      name: 'Planets',
      component: Planets,
    },
    {
      path: '/:id/species',
      name: 'Species',
      component: Species,
    },
    {
      path: '/:id/vehicles',
      name: 'Vehicles',
      component: Vehicles,
    },
    {
      path: '/:id/starships',
      name: 'Starships',
      component: Starships,
    },
  ]
})