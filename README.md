# Zendesk Coding Challenge 2021

This is a browser-based Ticket Viewer that is built for the Coding Challenge proposed by Zendesk in November 2021.
Color styling was inspired by [Zendesk's color palette](https://brandland.zendesk.com/color#zendesk-colors). 
The project is deployed on Netlify at [here](https://sonmac-ticketsviewer.netlify.app/) (tickets might not be shown due to expired token).

This Ticket Viewer will:

- Connect to the Zendesk API
- Request all the tickets for your account
- Display them in a responsive grid
- Display individual ticket's details in a pop-up window
- Page through tickets when more than 25 tickets are returned

## About

- Author: Son Tran Thien Mac
- Technologies: React, HTML, CSS, JavaScript, Bootstrap, Reactstrap, Postman, Jest, React Testing Library, Git, Netlify
- Date: 11/21/21 to 11/27/21

## Installation

### Requirements and Recommendations

- Must have [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed

- This program is able to handle an interruption of Internet connection, but the user ought to maintain a stable connection for the best experience

### Procedure

1.  Clone this Github repository

        git clone https://github.com/sonmac1203/Zendesk_Ticket_Viewer_Version2.git

2.  Redirect to the root directory of this repository
  
        cd Zendesk_Ticket_Viewer_Version2

3.  Install dependencies

        npm install

4. Create .env file

        touch .env

5. Add entries for authentication factors in .env file (retrieve values from submission)

        REACT_APP_OAUTH_TOKEN=...
        REACT_APP_SUBDOMAIN=...

6.  Run the program

        npm start

## Testing

- Run the tests

        npm run test


## Interface

Main display: display all tickets with pagination
![Main display](/images/main_display.png)

Pop-up window: display details for a single ticket
![Pop-up ticket details](/images/pop-up_details.png)

Loading: appear while waiting for a response from Zendesk API
![Loading dots](/images/loading_dots.png)

Error page: appear when there is an Internet interruption or any server error
![Error page](/images/error_display.png)


