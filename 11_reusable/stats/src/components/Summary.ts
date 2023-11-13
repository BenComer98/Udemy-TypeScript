import { MatchData } from "./MatchData";
import { WinsAnalysis } from "../analyzers/WinsAnalysis";
import { HtmlReport } from "../reportTargets/HTMLReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(
      new WinsAnalysis(team),
      new HtmlReport()
    );
  }

  constructor(private analyzer: Analyzer, private outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]) {
    this.outputTarget.print(this.analyzer.run(matches));
  }
}