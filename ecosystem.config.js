module.exports = {
    apps : [
        {
          name: "json-vee",
          script: "./app.js",
          watch: false,
          env: {
              "PORT": 80,
              "NODE_ENV": "development"
          },
          env_production: {
              "PORT": 443,
              "NODE_ENV": "production",
          }
        }
    ]
  }