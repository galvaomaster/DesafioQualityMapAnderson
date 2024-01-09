Feature: Make a successful registration


    Scenario: Successful record creation
        Given that i am on the registration page
        When i fill in the required fields
        Then i have a success message

    Scenario: Validate error message during registration
        Given that i am on the registration page
        When  i do not fill the required fields
        And click on the register button
        Then i have an error_message

    #     Examples:
    #         | fields            | error_message
    #         | firstName         | First name is required.  
    #         | lastName          | Last name is required.
    #         | email             | Email is required.  
    #         | password          | Password is requird.
    #         | confirmPassword   | Password is required.

