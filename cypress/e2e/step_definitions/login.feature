Feature: Login

    Scenario: Valid login
        Given i'm on the nopcommerce page
        When i type my email
        And  i type my password
        And i click on submit button
        Then i have a successful login




# @focus
# Scenario: Invalid Login

#     When i type a  "<email>"
#     And type a "<password>"
#     Then i have an error "<message>"

#     Examples:
#         | email         | password | message |
#         | anderson@ttt  | Value 2  | error |

