import { OutputTarget } from "../components/Summary";

export class ConsoleReport implements OutputTarget {
  constructor() {};

  print(report: string): void {
    console.log(report);
  }
}