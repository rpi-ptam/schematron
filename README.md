## Rensselaer Parking-Ticket Appeal Management System - Database Migrations ##
-------------

Creation of the database migrations utilizing `node-pg-migrate`. 


_Authored by:_
 - Aaron J. Shapiro
 - Dylan L. Cheung
 - Joshua A. Berman
 
----------

Development Environment
-------------

The latest version of [Node.js](https://nodejs.org/en/) > _(v8.0.0)_ should be installed on your system. If you are using Windows and are having a hard time installing the latest version, please consider using [Node Version Manager](https://github.com/creationix/nvm).

#### Dependency Installation
Install PostgreSQL version 10. Installiation instructions are here: [PostgreSQL Downloads](https://www.postgresql.org/download/)

Once all system-dependencies are installed, run `npm install`


#### Configuration

 1. Copy the contents `example.json` from the `config` folder and create a `default.json` file in the same directory.
 2. Fill out the configuration file as necessary, i.e. configure the database.
 
----------

Using Migrations
-------------

- `npm run migrate create migration_name` to create a migration named `xxx_migration_name.js`
- `npm run migrate up` to push all changes from migrations to database
- `npm run migrate down` to remove changes on the database from the last migration

