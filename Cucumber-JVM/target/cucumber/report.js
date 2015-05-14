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
  "duration": 7055837058,
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
  "duration": 8395131216,
  "status": "passed"
});
formatter.match({
  "location": "NewLeadCreationStepDefination.i_click_on_Admission_Link()"
});
formatter.result({
  "duration": 570014900,
  "status": "passed"
});
formatter.match({
  "location": "NewLeadCreationStepDefination.i_click_on_Admission_Manager_and_Add_New_Lead_Referral_Link()"
});
formatter.result({
  "duration": 7084076891,
  "status": "passed"
});
formatter.match({
  "location": "NewLeadCreationStepDefination.i_fill_all_the_required_details_for_New_Referral()"
});
formatter.result({
  "duration": 6865538786,
  "status": "passed"
});
formatter.match({
  "location": "NewLeadCreationStepDefination.i_should_be_able_to_see_the_created_new_Lead()"
});
formatter.result({
  "duration": 2112778731,
  "status": "failed",
  "error_message": "org.junit.ComparisonFailure: expected:\u003cTestNGLNInfoCall_[gTm, TestNGFNInfoCall_gTm]\u003e but was:\u003cTestNGLNInfoCall_[envzV, TestNGFNInfoCall_envzV]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepsDefinations.NewLeadCreationStepDefination.i_should_be_able_to_see_the_created_new_Lead(NewLeadCreationStepDefination.java:153)\r\n\tat ✽.Then I should be able to see the created new Lead(features/NewLeadCreation.feature:9)\r\n"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 933626381,
  "status": "passed"
});
formatter.before({
  "duration": 5594353923,
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
  "duration": 6871864433,
  "status": "passed"
});
formatter.match({
  "location": "NewLeadCreationStepDefination.i_click_on_Admission_Link()"
});
formatter.result({
  "duration": 582107235,
  "status": "passed"
});
formatter.match({
  "location": "NewLeadCreationStepDefination.i_click_on_Admission_Manager_and_Add_New_Lead_Referral_Link()"
});
formatter.result({
  "duration": 4790441633,
  "status": "passed"
});
formatter.match({
  "location": "NewLeadCreationStepDefination.i_fill_invalid_details_for_New_Referral()"
});
formatter.result({
  "duration": 3078993063,
  "status": "passed"
});
formatter.match({
  "location": "NewLeadCreationStepDefination.i_should_be_able_to_see_error_message()"
});
formatter.result({
  "duration": 187676031,
  "status": "passed"
});
formatter.after({
  "duration": 480563677,
  "status": "passed"
});
});