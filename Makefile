build:
	docker-compose build

start:
	docker-compose up

stop:
	docker-compose down

restart:
	docker-compose down && docker-compose build && docker-compose up
