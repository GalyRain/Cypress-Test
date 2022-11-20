Feature: e2e tests: Technical groups test suite

  Scenario Outline: Check Technicals diagram for "<Stock>" stock
    Given user goes to TradingView page
    And user selects Products -> Chart
    And user selects an "<Stock>" stock
    And user in the bottom right widget, scroll to "Technical" element
    And User takes a screenshot

    Examples:
      | Stock    |
      | Alphabet |
