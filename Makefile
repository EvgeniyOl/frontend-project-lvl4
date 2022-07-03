start-backend:
	npx start-server -p 5001
start-frontend:
	make -C app start
install:
	npm ci
	make -C app install
start:
	make start-backend & make start-frontend