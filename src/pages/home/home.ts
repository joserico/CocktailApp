import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import {CocktailPage} from "../cocktail/cocktail";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    cocktails: any[] = [];
    q: string = '';

    constructor(public navCtrl: NavController, public rest: RestProvider, public navParams: NavParams) {
    }

    ionViewDidLoad() {

        this.rest.getCocktails()
            .subscribe(
                (data) => { // Success
                    this.cocktails = data['drinks'];
                    //console.log(this.cocktails);
                },
                (error) => {
                    console.error(error);
                }
            )

    }

    itemTapped(event, cocktail) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(CocktailPage, {
            item: cocktail
        });
    }

    getCocktails(){
        //this.cocktails = this.dataService.filterItems(this.searchTerm);
        console.log(this.q);

        this.rest.getCocktailBy(this.q)
            .subscribe(
                (data) => { // Success
                    this.cocktails = data['drinks'];
                    console.log(this.cocktails);
                },
                (error) => {
                    console.error(error);
                }
            )

    }

}
