Feature:  Access to serverest.dev and test the API methods

    Scenario: Create a user
        Given I access serverrest.de using POST method
        Then the user should be create successfully

    Scenario: Validate duplicate user
        Given I access serverrest.de using POST method
        Then the user should be shown bad request

    # Scenario: Fetch the user
    #     Given I access serverrest.de using GET method
    #     Then the user should be fetched successfully

    Scenario: List all registered users
        Given I access serverrest.de using GET method
        Then all the users should be listed

    # Scenario: Edit the user
    #     Given I access serverrest.de using PUT method
    #     Then the user should be changed

    Scenario: Delete the user
         Given I access serverrest.de using DELETE method
         Then the user should be deleted successfully
