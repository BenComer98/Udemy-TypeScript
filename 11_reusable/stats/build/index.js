"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./components/MatchReader");
const CsvFileReader_1 = require("./hooks/CsvFileReader");
const Summary_1 = require("./components/Summary");
// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of MatchReader that satisfies the DataReader interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
// Get matchReader.matches
matchReader.load();
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
