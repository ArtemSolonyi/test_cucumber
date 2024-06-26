Feature: Get the next day by passed day

  Scenario: Successfully get the next day
    Given the day of the week is "monday"
    When I request the next day by passed day
    Then I should receive "tuesday"

  Scenario: Handle invalid day
    Given the day of the week is "invalid_day"
    When I request the next day by passed day
    Then I should receive a 404 status


