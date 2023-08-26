# meet

Feature 1: Filter Events By City
  As a user,
  I should be able to filter events by city
  So that I can see a list of events taking place in that city
  
  Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
    Given: user hasn’t searched for any city;
    When: the user opens the app;
    Then: the user should see a list of upcoming events.
   Scenario 2: User should see a list of suggestions when they search for a city.
    Given: the main page is open;
    When: user starts typing in the city textbox;
    Then: the user should receive a list of cities (suggestions) that match what they’ve typed.
  Scenario 3: User can select a city from the suggested list. 
    Given: user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
    When: the user selects a city (e.g., “Berlin, Germany”) from the list;
    Then: their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

Feature 2: Show/Hide Event Details
  As a user,
  I should be able to Show/Hide Event Details
  So that I can display more information about a particular event, but be able to close it so I can display more information about another event
  
  Scenario 1: An event element is collapsed by default.
    Given: A user has not loaded the webpage.
    When: The user loads the main page
    Then: The event details will be collapsed
  Scenario 2: User can expand an event to see details.
    Given: A user is on the main page, or searched a city
    When: The user clicks the “details” button
    Then: The even details will expand to show details
  Scenario 3: User can collapse an event to hide details.
    Given: A user has clicked the events details page
    When: The user clicks the hide details button
    Then: The even details will collapse

Feature 3: Specify Number of Events
  As a user,
  I should be able to specify the number of events displayed
  So that I can filter how many events I wish to look through
  
  Scenario 1: When user hasn’t specified a number, 32 events are shown by default.
    Given: A user hasn’t searched for anything
    When: A user opens the app
    Then: 32 events will be shown
  Scenario 2: User can change the number of events displayed.
    Given: A user has opened the app
    When: The user starts typing a number in the number of events textbox
    Then: A user can change the number of events listed

Feature 4: Use the App When Offline
  As a user,
  I should be able to use the app when offline
  So that I can utilize the app when I am not in a place that I can connect to the internet
  
  Scenario 1: Show cached data when there’s no internet connection.
    Given: A user is on the app with no internet connection
    When: A user types in the city text box AND they have selected their particular city before
    Then: A user will be able to view events that are cached in their local storage
  Scenario 2: Show error when user changes search settings (city, number of events).
    Given: A user has typed in the city textbox OR the number of events textbox
    When: The user types a misspelling or an invalid number in the textboxes
    Then: An error message will display to the user

Feature 5: Add an App Shortcut to the Home Screen
  As a user,
  I should be able to add a shortcut of the app to the home screen
  So that I can more efficiently access the app when I need it
  
  Scenario 1: User can install the meet app as a shortcut on their device home screen.
    Given: A user has installed the meet app on their device
    When: They “grab” the app on their device
    Then: They can add the app to their home screen.
   
Feature 6: Display Charts Visualizing Event Details
  As a user,
  I should be able to dispaly charts visualizing event details
  So that I can better understand the ratio of events going on in different cities I am looking into
  
  Scenario 1: Show a chart with the number of upcoming events in each city
    Given: A user has not searched for any cities
    When: A user views event details for the cities displayed by default
    Then: A user can view a visual chart showing the number of upcoming events in each city
