# Summer project 2022

App for plant lovers developed with React JS and Symfony.

## Features

 - View the plant catalogue
 - View detailed plant care instructions
 - Search by name
 - Filter by care difficulty
 - Filter by pet friendliness
 - Order AZ & ZA
 - Register and login with your account
 - Add plants to your personal collection
 - Set reminders to water your plants

# Steps to follow

1. Copy the folder to SymfonyMAMP and rename to "web". Then cd to "web"
2. Install dependencies using `composer install`
3. Install front-end dependencies using `npm install`
4. Do the migration:

   - Open file .env in "SYMFONY-MAMP" folder (not the "web" folder!)
   - Rename database to `DATABASE_NAME=PlantDB `.
   - Open Docker > symfony-mamp_www_1 > CLI
   - cd to "web" folder
   - Run `php bin/console make:migration`
   - Run `php bin/console doctrine:migrations:migrate`. If you get errors that ToDOdb doesn't exist restart docker container a few times.

5. Afterwards you can run webpack encore using following command
   `npm run watch`
6. Start Docker container SYMFONY-MAMP
7. Visit URL: http://localhost:8007/ to see the app
8. Use Crtl + C to stop the watch

# Tech stack

1.  [Symfony](https://symfony.com/)
2.  [React](https://reactjs.org/)
3.  [PHP](https://www.php.net/)
4.  [MySQL](https://www.mysql.com)
5.  [SymfonyMAMP](https://github.com/kalwar/Symfony-MAMP)
