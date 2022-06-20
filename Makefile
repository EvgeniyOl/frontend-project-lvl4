start-frontend:
	npm run start-frontend

start-backend:
	npm run start-backend

start:
	npm run start

install:
	npm ci

install: install-deps

lint:
	npx eslint . --ext js,jsx

deploy:
	git push heroku
