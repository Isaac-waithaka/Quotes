export class Quote {
  showAuthor: boolean;
  constructor(public id: number,public quotation: string,public author: string, public datePosted: Date,public likes:number, public dislikes:number){
    this.showAuthor=false;
  }
}
