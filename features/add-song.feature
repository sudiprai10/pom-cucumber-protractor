@regression
Feature: Add Song
  As an user I want to add a new song

  Scenario Outline: Add Song
    Given I am on the home page and I open new song panel
    Then I should able to add song with "<Keys>", "<Signature>", "<Language>" and "<Visibility>"

  Examples:

  | Keys  | Signature | Language | Visibility  |
  | C     |  2/4      | English  | Public      |
  | C#    |  3/4      | English  | Private     |
  | Db    |  4/4      | English  | Public      |
  | Eb    |  2/4      | English  | Private     |
  | Fm    |  3/4      | English  | Public      |
