Feature: Get today year

  Scenario: Successfully get the today year
    Given data 'Today' for mock data in db
    When I request to get today year
    Then I should receive a 200 status.
    Then I should receive value 'Todays'

  Scenario: Failed get the data
    When Clear data in db
    When I request to get today year
    Then I should receive a 404 status.
