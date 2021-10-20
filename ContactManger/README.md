I set up CI/CD pipelines as well in Heroku 

https://github.com/arezousohrabvand/ContactMangerWebApi

https://contactmanager-dev.herokuapp.com/

https://contactmanager-qa.herokuapp.com/

https://contactmanager-stage.herokuapp.com/

https://contactmanager-product.herokuapp.com/


Project Assignment 1 – Web Frameworks and APIs
This assignment requires you to create a simple Web API application that integrates
For this assignment, you will create a simple Contact Manager Web API application that
integrates with MongoDB, using Visual Studio Code and Node.js (Express+Mongoose)
according to the requirements below.
Application Requirements
1. Create a new Express web application using the express generator tool
2. Set up your database on www.mongodb.com and make sure the database
credentials are stored in a config file (NOT hardcoded in app.js)
3. Generate a model class according to the following data specification table:
Resource Properties Description
Contacts First Name (required)
Middle Name
Last Name (required)
Email Address (required)
Phone Number
Address Line 1
Address Line 2
Province
Postcode
Country
Basic contact information
about somebody
4. Implement the specified endpoints (routes) based on the following Endpoint
Specification table:
Endpoint Parameters Method Description
/contacts None GET List all contacts in
the database
/contacts Last Name GET Filter contacts by
last name
/contacts JSON object
containing
information about
a contact
POST Adds a new
contact in the
database
/contacts/:_id Id: id value of the
contact to update,
JSON object
containing
updated
information about
a contact
PUT Updates a contact
in the database
COMP 3033 Project Assignment 1
Eduardo Jaime – Georgian College
Page 3 of 3
/contacts/:_id Id: id value of the
contact to be
deleted
DELETE Deletes a contact
from the database
5. Document your code with comments within your scripts.
6. Add a Title, Description, and link to your live site on your README.md file
7. Deploy your application to Azure or Heroku
