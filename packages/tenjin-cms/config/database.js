module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        uri: env("DATABASE_URI"),
      },
      options: {
        authenticationDatabase: "admin",
        ssl: env.NODE_ENV === "stage" || env.NODE_ENV === "production",
      },
    },
  },
});
