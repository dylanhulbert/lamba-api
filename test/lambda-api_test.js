var assert = require("chai").assert;var lambdaapi = require("../lib/my_new_api.js");
describe("lambda-api", function () { it("exports handleRequest", function () { assert.typeOf(lambdaapi.handleRequest, "function"); 
});
});