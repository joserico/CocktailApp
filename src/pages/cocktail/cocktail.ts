import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the CocktailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-cocktail',
    templateUrl: 'cocktail.html',
})
export class CocktailPage {

    cocktail: any[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {

        if (navParams.get('item')) {
            this.cocktail = navParams.get('item');
        }

    }

    ionViewDidLoad() {
    }

    goBack() {
        this.navCtrl.pop();
    }

}
