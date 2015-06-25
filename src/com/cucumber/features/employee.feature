Feature: life of IT Guys

In Order to get good salary
As a IT guy
I want to keep my boss happy

Scenario Outline: I am a tester
Given I am a "<Type_of_tester>" Tester
When I go to work
Then I "<Work_result>" it
And My boss "<Boss_action>" me
But The developer "<Developers_reaction>" me




Examples:
|	Type_of_tester	|	Work_result	|	Boss_action	|	Developers_reaction	|
|	Bad				|	Mess		|	Fires		|	Likes				|
|	Gooda			|	Completea	|	Likesa		|	Hatesa				|