.PHONY: help
help:
	@echo "make dev"
	@echo "    Run the dev server at http://localhost:8000/."
	@echo "make help"
	@echo "    Show this help message."

.PHONY: dev
dev:
	python3 -m http.server --directory site
