
export class Question{
  public id: number;
  public question: string;
  public answer: string;
  public answered: boolean;
  public dateTimeStamp: string
  constructor(
    id:number,
    question:string,
    answer:string,
    answered:boolean,
    dateTimeStamp: string
  ) {
    this.id=id;
    this.answer=answer;
    this.answered=answered;
    this.dateTimeStamp=dateTimeStamp;
  }
}
