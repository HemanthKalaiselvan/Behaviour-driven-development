$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Calc.feature");
formatter.feature({
  "line": 2,
  "name": "Calculator",
  "description": "In order to avoid silly mistakes\n  As a math idiot\n  I want to be told the sum of two numbers",
  "id": "calculator",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@calc"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Add two numbers",
  "description": "",
  "id": "calculator;add-two-numbers",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@mytag"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have entered 50",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I have also entered 70",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I press add",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the result should be 120 on the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "CalcStepDefinitions.i_have_entered_50()"
});
formatter.result({
  "duration": 304319601,
  "status": "passed"
});
formatter.match({
  "location": "CalcStepDefinitions.i_have_also_entered_70()"
});
formatter.result({
  "duration": 71859,
  "status": "passed"
});
formatter.match({
  "location": "CalcStepDefinitions.i_press_add()"
});
formatter.result({
  "duration": 80071,
  "status": "passed"
});
formatter.match({
  "location": "CalcStepDefinitions.the_result_should_be_120_on_the_screen()"
});
formatter.result({
  "duration": 129755,
  "status": "passed"
});
});