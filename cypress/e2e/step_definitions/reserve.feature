Feature: Make a hotel reservation

    Scenario: Book Hotel in Dubai
        Given I am logged in to the reservation page
        When I search for a trip to Dubai
        And I find a five-star hotel
        And I pay for the reservation with Pay Later
        Then the hotel must be booked successfully