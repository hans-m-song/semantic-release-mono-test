const { foo } = require("@axalotl/foo");
const { bar } = require("@axalotl/bar");

module.exports.baz = () => foo() + bar();
