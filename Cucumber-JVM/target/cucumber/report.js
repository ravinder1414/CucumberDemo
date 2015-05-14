$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/NewLeadCreation.feature");
formatter.feature({
  "id": "new-lead-creation-feature-file",
  "tags": [
    {
      "name": "@Smoke",
      "line": 1
    }
  ],
  "description": "",
  "name": "New Lead Creation feature file",
  "keyword": "Feature",
  "line": 2
});
formatter.before({
  "duration": 6423208646,
  "status": "passed"
});
formatter.before({
  "duration": 5370185983,
  "status": "passed"
});
formatter.before({
  "duration": 7096518882,
  "status": "passed"
});
formatter.scenario({
  "id": "new-lead-creation-feature-file;creating-new-lead-using-valid-details",
  "description": "",
  "name": "Creating New Lead using valid details",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "I am on Orion CLS Home page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I click on Admission Link",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I click on Admission Manager and Add New Lead/Referral Link",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I fill all the required details for New Referral",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "I should be able to see the created new Lead",
  "keyword": "Then ",
  "line": 9
});
formatter.match({
  "location": "NewLeadCreationStepDefination.i_am_on_Orion_CLS_Home_page()"
});
formatter.result({
  "duration": 9445572939,
  "status": "passed"
});
formatter.match({
  "location": "NewLeadCreationStepDefination.i_click_on_Admission_Link()"
});
formatter.result({
  "duration": 561952876,
  "status": "passed"
});
formatter.match({
  "location": "NewLeadCreationStepDefination.i_click_on_Admission_Manager_and_Add_New_Lead_Referral_Link()"
});
formatter.result({
  "duration": 13206899026,
  "status": "passed"
});
formatter.match({
  "location": "NewLeadCreationStepDefination.i_fill_all_the_required_details_for_New_Referral()"
});
formatter.result({
  "duration": 9821442309,
  "status": "passed"
});
formatter.match({
  "location": "NewLeadCreationStepDefination.i_should_be_able_to_see_the_created_new_Lead()"
});
formatter.result({
  "duration": 5609996013,
  "status": "failed",
  "error_message": "org.junit.ComparisonFailure: expected:\u003cTestNGLNInfoCall_[vQN, TestNGFNInfoCall_vQN]\u003e but was:\u003cTestNGLNInfoCall_[LwkzK, TestNGFNInfoCall_LwkzK]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepsDefinations.NewLeadCreationStepDefination.i_should_be_able_to_see_the_created_new_Lead(NewLeadCreationStepDefination.java:156)\r\n\tat ✽.Then I should be able to see the created new Lead(features/NewLeadCreation.feature:9)\r\n"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 501446047,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 347814339,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 582097435,
  "status": "passed"
});
formatter.before({
  "duration": 5748349287,
  "status": "passed"
});
formatter.before({
  "duration": 5664419049,
  "status": "passed"
});
formatter.before({
  "duration": 5715698336,
  "status": "passed"
});
formatter.scenario({
  "id": "new-lead-creation-feature-file;creating-new-lead-using-invalid-details",
  "description": "",
  "name": "Creating New Lead using invalid details",
  "keyword": "Scenario",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "I am on Orion CLS Home page",
  "keyword": "Given ",
  "line": 12
});
formatter.step({
  "name": "I click on Admission Link",
  "keyword": "When ",
  "line": 13
});
formatter.step({
  "name": "I click on Admission Manager and Add New Lead/Referral Link",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "I fill invalid details for New Referral",
  "keyword": "When ",
  "line": 15
});
formatter.step({
  "name": "I should be able to see error message",
  "keyword": "Then ",
  "line": 16
});
formatter.match({
  "location": "NewLeadCreationStepDefination.i_am_on_Orion_CLS_Home_page()"
});
formatter.result({
  "duration": 6733018352,
  "status": "passed"
});
formatter.match({
  "location": "NewLeadCreationStepDefination.i_click_on_Admission_Link()"
});
formatter.result({
  "duration": 583524757,
  "status": "passed"
});
formatter.match({
  "location": "NewLeadCreationStepDefination.i_click_on_Admission_Manager_and_Add_New_Lead_Referral_Link()"
});
formatter.result({
  "duration": 4920141374,
  "status": "passed"
});
formatter.match({
  "location": "NewLeadCreationStepDefination.i_fill_invalid_details_for_New_Referral()"
});
formatter.result({
  "duration": 5777976542,
  "status": "passed"
});
formatter.match({
  "location": "NewLeadCreationStepDefination.i_should_be_able_to_see_error_message()"
});
formatter.result({
  "duration": 187772282,
  "status": "passed"
});
formatter.after({
  "duration": 224421345,
  "status": "passed"
});
formatter.after({
  "duration": 267437705,
  "status": "passed"
});
formatter.after({
  "duration": 406052433,
  "status": "passed"
});
});