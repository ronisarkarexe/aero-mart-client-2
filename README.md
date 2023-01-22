# Aero Mart Online Car Selling Project
The main objective of this Project is to build a quality interface for users.

Admin can create and store product records. This application also provides facilities for a payment gateway system. This application is helpful to the department of the organization which maintains data of information on vehicles. We have created Client Panel and Admin Panel so the admin can manage all the data of the User. 

Admin can create change, update, and delete vehicle Basically this application mainly focuses on all the user who buys a new vehicle.

## Client Panel

1. User Login Section ( Google, Email Password Authentication Firebase )
2. User Profile ( User Name, Email, profile photo ) 
3. User Dashboard ( Order list, Review, Previous Order )
4. User Review and Rating From(Name, Email, Description, Rating)
5. Shop From((Name, Email, Phone Number this three-part editable), (Price, carModelName by default disable))
6. Order list ( Order list, Status shows Pending and ongoing and Done )
7. Order now from( Name, Email, Price, all are disable )
8. After completing the order Status showing (Pending)

## Admin Panel
1. Add Product Form (Model Name, Brand Name, Model Color, Liquid, Price, Description, File, or vehicle photo)
2. Manage Products form ( delete, update )
3. Product Update form ( After adding a product if we need to change then we update this form )
4. Manage order ( This form depends on payment status, if done then we change the status will be Done or Pending and ongoing )
5. Make Admin ( admin can make another admin for managing application )
6. Role ( Admin )
6. All User ( See user list with Name, email, Role, Delete option )
7. All Review ( Name, Email, Star, Description, Delete )
8. Status Update


## TOOLS AND TECHNOLOGIES USED:

- Design and Interface: REACT, CSS, Boostrap5, Firebase, React-router, Material UI, State Management with Provider, log in with google.

- Programming language: Javascript
- Server-side: Node JS

- Database: MongoDB

## Objective:
1. Make the user-friendly interface
2. Use (JWT) JSON Web Token, to security information between two parties — a client and a server
3. To provide the best quality and comfort as per user needs,
4. Make it easy to use for admin ( User and Admin in one application )
5. Make user data management more effective.
6. Features are easy to use for users.
7. Make easy login authentication with google.


## How to Run

- Node.js and npm need to be installed globally on your machine.
- Clone this repository

- Client Side
```sh
$ git clone https://github.com/ronisarkarexe/aero-mart-client.git
```
- Server Side 
```sh
$ git clone https://github.com/ronisarkarexe/aero-mart-server.git
```
### After Installing the dependencies and running the project.

- Install the dependencies using `npm install`
- Run the app using `npm start`


### Setting up Firebase for Login

### Install Heroku on your machine to deploy your API (Application program interface).

- Now build your website for production
- Run `npm run build`

### Host your site on Firebase