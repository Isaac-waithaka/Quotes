import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] =[
    new Quote(1,'You only live once, but if you do it right, once is enough.','Mae West',new Date(2020,9,12),0,0),
    new Quote(2,'Not how long, but how well you have lived is the main thing.','Seneca',new Date(2020,9,14),0,0),
    new Quote(3,'If life were predictable it would cease to be life, and be without flavor.','Eleanor Roosevelt',new Date(2020,9,3),0,0),
    new Quote(4,'The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.','Henry Ford',new Date(2020,9,7),0,0),
    new Quote(5,'In order to write about life first you must live it.','Ernest Hemingway',new Date(2020,9,17),0,0),
    new Quote(6,'Life is not a problem to be solved, but a reality to be experienced.','Soren Kierkegaard',new Date(2020,9,15),0,0),
  ];

  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  deleteQuote(toDelete, index){
    if (toDelete) {
       let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quotation}?`)

      if (toDelete){
         this.quotes.splice(index,1);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
