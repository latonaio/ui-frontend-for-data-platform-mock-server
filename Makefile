# http://localhost:5000/bill-of-material/list/ownerProductionPlantBusinessPartner

generate-json:
	node mergeMockJson.js

json-server-watch:
	npm run json-server:server
