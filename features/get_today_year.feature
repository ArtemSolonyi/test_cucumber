Feature: Get today year

  Scenario: Successfully get the today year
    When I request to get today year
    Then I should receive a 200 status
    Then I should receive value 2024
