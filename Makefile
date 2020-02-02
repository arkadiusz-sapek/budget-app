dev-dockerfile := -f docker-compose.yml -f docker-compose.dev.yml
prod-dockerfile := -f docker-compose.yml -f docker-compose.prod.yml

build-dev:
	docker-compose $(dev-dockerfile) build

dev:
	docker-compose $(dev-dockerfile) up $(variadic_args)


generate-migrations:
	docker exec -it backend-service-budget-app npm run migration:generate