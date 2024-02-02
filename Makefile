.PHONY: help
help:
	@echo "make dev"
	@echo "    Run the dev server at http://localhost:8001/."
	@echo "make help"
	@echo "    Show this help message."

.PHONY: dev
dev:
	python3 -m http.server --directory site 8001
