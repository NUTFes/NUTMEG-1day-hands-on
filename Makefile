build:
	docker compose build
	docker compose run --rm api go mod tidy
	docker compose run --rm view npm install

