import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getRandomCocktail() {
      return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  }

    getCocktail(idCocktail) {
        return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + idCocktail);
    }

    getCocktailBy(query) {
        return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + query);
    }

    getCocktails(){
        return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    }

}
