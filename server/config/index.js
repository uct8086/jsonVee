const config = {};
config.bodyParserJsonOptions = {
    limit: '10mb'
};
config.bodyParserUrlencodedOptions = {
    extended: false,
    limit: '20mb'
};

module.exports = exports = config;