module.exports = {
    apps : [
        {
            name: "json-vee",
            script: "./app.js",
            watch: false,
            env: {
                "PORT": 8001,
                "NODE_ENV": "development"
            },
            env_production: {
                "PORT": 8001,
                "NODE_ENV": "production",
            }
        }
    ]
};