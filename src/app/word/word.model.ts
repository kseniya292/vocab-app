export class Word {
  word: string;
  votes: number;

  constructor(word: string, votes?: number) {
    this.word = word;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes +=1;
  }

  voteDown(): void {
    this.votes -=1;
  }
}
