import { Component } from '@angular/core';
import { quiz1 } from './data/quiz1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quizmiage';
  age=22;
  produit={'id':1,'desg':'clavier','prix':210,'qte':81}

  produits=[{'id':1,'desg':'clavier','prix':210,'qte':85},
  {'id':2,'desg':'RAM','prix':210,'qte':81},
  {'id':3,'desg':'CPU','prix':210,'qte':79}]

  dd={
    "id": 1055,
    "questionId": 1010,
    "name": "Exception",
    "isAnswer": false
}

   pp(prd) {
    prd.qte--;
  }
}
