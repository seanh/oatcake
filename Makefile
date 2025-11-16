.PHONY: help
help:
	@echo "make dev"
	@echo "    Run the dev server at http://localhost:8001/."
	@echo "make css"
	@echo "    Make oatcake.min.css from oatcake.css."
	@echo "make html"
	@echo "    Make HTML files that're built from parts."
	@echo "make format"
	@echo "    Format the code nicely."
	@echo "make checkformatting"
	@echo "    Check that the code is formatted nicely."
	@echo "make validate"
	@echo "    Check that the code is valid."
	@echo "make help"
	@echo "    Show this help message."

.PHONY: css
css:
	bin/make_css.sh

.PHONY: html
html:
	bin/make_html.sh

.PHONY: dev
dev:
	honcho start

.PHONY: format
format:
	npx prettier --write .

.PHONY: checkformatting
checkformatting:
	npx prettier --check .

.PHONY: validate
validate:
	npx html-validate .

.PHONY: spell
spell: additional_args?=
spell:
	@DICPATH=hunspell hunspell -H -d en_US -r -p hunspell/personal.dict $(additional_args) site/index.html
