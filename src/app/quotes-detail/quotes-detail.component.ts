import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Quotes } from '../quotes-word';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
  @Input()
  quoty: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete)
  }
  deleteQuote(read:boolean){
    this.isComplete.emit(read)
  }
  upvote(){
    this.quoty.likes+=1;
  }
  downvote(){
    this.quoty.dislikes+=1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
