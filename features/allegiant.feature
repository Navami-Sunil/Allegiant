Feature: The Allegiant website

  Scenario Outline: As a user, I can book a flight

    Given I am on the home page
    When I add departure,airport,search flights
    Then I should see available flights

