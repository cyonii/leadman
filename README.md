# leadman

A Django + React web application for managing leads

The react application lives inside the `frontend` directory which is a django app

## Getting started
1. Clone the repo
2. Setup python virtual env
3. run `pipenv install` to install python/django dependencies
4. run `yarn install` to install js/react dependencies
5. run `python manage.py runserver` to get the server started
6. Goto http://localhost:8000 to view application

## Build
After changes on the react codebase, run these commands to generate new bundles
- run `yarn start` to bundle app in development mode
- run `yarn build` to bundle app in production mode
