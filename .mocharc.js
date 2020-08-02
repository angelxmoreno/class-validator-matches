/*
--require ./node_modules/ts-node/register
--require ./node_modules/source-map-support/register
--recursive
--exit

 */
module.exports = {
    require: ['./node_modules/ts-node/register', './node_modules/source-map-support/register'],
    spec: "test/**/*.spec.ts",
    recursive: true
}
