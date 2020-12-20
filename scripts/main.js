const tsj = require("ts-json-schema-generator");
const fs = require("fs");

const config = {
    path: "src/routes/healthcheck/types.ts",
    tsconfig: "tsconfig.json",
    type: "*", // Or <type-name> if you want to generate schema for that one type only
};

const output_path = "docs/api/lol.json";

const schema = tsj.createGenerator(config).createSchema(config.type);
const schemaString = JSON.stringify(schema, null, 2);
fs.writeFile(output_path, schemaString, (err) => {
    if (err) throw err;
});
