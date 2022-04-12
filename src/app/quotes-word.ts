// import { constructor } from "module";
// import { constructor } from "module";
// export class QuotesWord {
//   completeDate: string | number | Date;
//   id: number;
// }
// showInformation: boolean;
//     completeDate!: string | number | Date;
//     constructor(public id: number, public name: string, public title: string, public quote: string, public author:string, public datePosted: Date, public likes:number, public dislikes:number){
//       this.showInformation=false;
//     }
export class Quotes {
    showInformation: boolean;
    completeDate!: string | number | Date;
    constructor(public id: number, public name: string, public title: string, public quote: string, public author:string, public datePosted: Date, public likes:number, public dislikes:number){
      this.showInformation=false;
    }
}
