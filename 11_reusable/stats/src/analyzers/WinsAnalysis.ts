import { Analyzer } from "../components/Summary";
import { MatchData } from "../components/MatchData";
import { MatchResult } from "../enums/MatchResult";

export class WinsAnalysis implements Analyzer {
  constructor(private team: string) {};

  run(matches: MatchData[]): string {
    let wins = 0;
    for (let match of matches) {
      if ((match[1] === this.team && match[5] === MatchResult.HomeWin) ||
          (match[2] === this.team && match[5] === MatchResult.AwayWin)) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games!`;
  }
}