# teamwork-challenge

## How to run this project?
After cloning it, run the following in the project folder:
> npm install

Run the tests:
> npx playwright test --browser=chromium


## Project Structure
**pages**
Each page from the application has it's class, consolidating it's methods and locators in a single place
	
**tests**
Where the *.spec files with the test scenarios are located
	
**test-results**
For logging screenshots and videos on failed scenarios
	
**playwright.config.js**
Configuration file for the project