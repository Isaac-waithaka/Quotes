export class Quote {
  showAuthor: boolean;
  constructor(public id: number,public quotation: string,public author: string){
    this.showAuthor=false;
  }
}
