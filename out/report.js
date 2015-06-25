$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/cucumber/features/employee.feature");
formatter.feature({
  "id": "life-of-it-guys",
  "description": "\r\nIn Order to get good salary\r\nAs a IT guy\r\nI want to keep my boss happy",
  "name": "life of IT Guys",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "life-of-it-guys;i-am-a-tester",
  "description": "",
  "name": "I am a tester",
  "keyword": "Scenario Outline",
  "line": 7,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I am a \"\u003cType_of_tester\u003e\" Tester",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "I go to work",
  "keyword": "When ",
  "line": 9
});
formatter.step({
  "name": "I \"\u003cWork_result\u003e\" it",
  "keyword": "Then ",
  "line": 10
});
formatter.step({
  "name": "My boss \"\u003cBoss_action\u003e\" me",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "The developer \"\u003cDevelopers_reaction\u003e\" me",
  "keyword": "But ",
  "line": 12
});
formatter.examples({
  "id": "life-of-it-guys;i-am-a-tester;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 17,
  "rows": [
    {
      "id": "life-of-it-guys;i-am-a-tester;;1",
      "cells": [
        "Type_of_tester",
        "Work_result",
        "Boss_action",
        "Developers_reaction"
      ],
      "line": 18
    },
    {
      "id": "life-of-it-guys;i-am-a-tester;;2",
      "cells": [
        "Bad",
        "Mess",
        "Fires",
        "Likes"
      ],
      "line": 19
    },
    {
      "id": "life-of-it-guys;i-am-a-tester;;3",
      "cells": [
        "Gooda",
        "Completea",
        "Likesa",
        "Hatesa"
      ],
      "line": 20
    }
  ]
});
formatter.scenario({
  "id": "life-of-it-guys;i-am-a-tester;;2",
  "description": "",
  "name": "I am a tester",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "I am a \"Bad\" Tester",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I go to work",
  "keyword": "When ",
  "line": 9
});
formatter.step({
  "name": "I \"Mess\" it",
  "keyword": "Then ",
  "line": 10,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "My boss \"Fires\" me",
  "keyword": "And ",
  "line": 11,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "The developer \"Likes\" me",
  "keyword": "But ",
  "line": 12,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Bad",
      "offset": 8
    }
  ],
  "location": "EmployeeTest.I_am_tester(String)"
});
formatter.result({
  "duration": 299465069,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeTest.I_goto_work()"
});
formatter.result({
  "duration": 43038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mess",
      "offset": 3
    }
  ],
  "location": "EmployeeTest.result_of_my_work(String)"
});
formatter.result({
  "duration": 71841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fires",
      "offset": 9
    }
  ],
  "location": "EmployeeTest.My_boss_reaction(String)"
});
formatter.result({
  "duration": 65882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Likes",
      "offset": 15
    }
  ],
  "location": "EmployeeTest.deveopler_reaction(String)"
});
formatter.result({
  "duration": 87732,
  "status": "passed"
});
formatter.scenario({
  "id": "life-of-it-guys;i-am-a-tester;;3",
  "description": "",
  "name": "I am a tester",
  "keyword": "Scenario Outline",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "I am a \"Gooda\" Tester",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I go to work",
  "keyword": "When ",
  "line": 9
});
formatter.step({
  "name": "I \"Completea\" it",
  "keyword": "Then ",
  "line": 10,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "My boss \"Likesa\" me",
  "keyword": "And ",
  "line": 11,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "The developer \"Hatesa\" me",
  "keyword": "But ",
  "line": 12,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Gooda",
      "offset": 8
    }
  ],
  "location": "EmployeeTest.I_am_tester(String)"
});
formatter.result({
  "duration": 74820,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeTest.I_goto_work()"
});
formatter.result({
  "duration": 32775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Completea",
      "offset": 3
    }
  ],
  "location": "EmployeeTest.result_of_my_work(String)"
});
formatter.result({
  "duration": 62902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Likesa",
      "offset": 9
    }
  ],
  "location": "EmployeeTest.My_boss_reaction(String)"
});
formatter.result({
  "duration": 63233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hatesa",
      "offset": 15
    }
  ],
  "location": "EmployeeTest.deveopler_reaction(String)"
});
formatter.result({
  "duration": 90049,
  "status": "passed"
});
});