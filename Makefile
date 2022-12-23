setup:
	docker-compose down && docker-compose \
		-f docker-compose.yml up --remove-orphans -d

c:
	prisma-repl