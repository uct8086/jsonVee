const config = {};
config.bodyParserJsonOptions = {
    limit: '10mb'
};
config.bodyParserUrlencodedOptions = {
    extended: false,
    limit: '20mb'
};

config.db = {
    url: "mongodb://localhost:27017/jsonVee",
}

module.exports = exports = config;