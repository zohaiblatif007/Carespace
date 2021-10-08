$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PatientGrid/CareGap/CareGap.feature");
formatter.feature({
  "name": "Functionality of Care Gap section of a patient",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CareGap"
    }
  ]
});
formatter.scenarioOutline({
  "name": "status change to closed of an open care gap",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CareGapStatusEditOpenClosed"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I search \u003cPatient\u003e using global search",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on Care Gaps tab",
  "keyword": "When "
});
formatter.step({
  "name": "I click on edit button of a \u003cCareGap\u003e care gap",
  "keyword": "And "
});
formatter.step({
  "name": "I enter \u003cStatus\u003e in care gap status field",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cResolutions\u003e in care gap resolutions field",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cReason\u003e in care gap reason field",
  "keyword": "* "
});
formatter.step({
  "name": "I click on update button to save status of care gap",
  "keyword": "* "
});
formatter.step({
  "name": "I should see status as \u003cStatus\u003e for \u003cCareGap\u003e care gap",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Patient",
        "CareGap",
        "Status",
        "Resolutions",
        "Reason"
      ]
    },
    {
      "cells": [
        "JURCEC, LILLIAN",
        "TCM interactive contact",
        "Open",
        "Follow up with patient",
        ""
      ]
    },
    {
      "cells": [
        "JURCEC, LILLIAN",
        "TCM interactive contact",
        "Closed",
        "Follow up with patient",
        "Goal Created"
      ]
    },
    {
      "cells": [
        "JURCEC, LILLIAN",
        "TCM interactive contact",
        "Open",
        "Follow up with patient",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to patient grid",
  "keyword": "Given "
});
formatter.match({
  "location": "SD_PatientGrid.I_navigate_to_patient_grid()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "status change to closed of an open care gap",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CareGap"
    },
    {
      "name": "@CareGapStatusEditOpenClosed"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I search JURCEC, LILLIAN using global search",
  "keyword": "Given "
});
formatter.match({
  "location": "SD_SearchPatient.search_Patient(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Care Gaps tab",
  "keyword": "When "
});
formatter.match({
  "location": "CareGapsteps.buttoncaregaptab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on edit button of a TCM interactive contact care gap",
  "keyword": "And "
});
formatter.match({
  "location": "CareGapsteps.buttonedit_caregap(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Open in care gap status field",
  "keyword": "* "
});
formatter.match({
  "location": "CareGapsteps.statusfield(String)"
});
