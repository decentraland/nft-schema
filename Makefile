build: schemas validate-api
	npx typescript -b src/tsconfig.json

watch:
	npx typescript -b src/tsconfig.json --watch

validate-api:
	npx ibm-openapi-validator openapi.yaml

schemas:
	npx json-schema-to-typescript -i src/schema.json -o src/types.ts --unreachableDefinitions --declareExternallyReferenced

test: build
	./node_modules/.bin/mocha test.js