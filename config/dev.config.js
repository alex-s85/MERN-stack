const config = {
    baseUrl: "http://localhost:8000/api/v1",
    port: process.env.PORT || 8000,
    databaseUrl:
      process.env.MONGO || "mongodb://localhost/landis",
  };
  
  module.exports = config;
  