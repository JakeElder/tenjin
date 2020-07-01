module.exports = ({ env }) => {
  console.log("------");
  console.log("------");
  console.log("------");
  console.log("------");
  console.log("------");
  console.log("------");
  console.log(env.NODE_ENV);
  console.log("------");
  console.log("------");
  console.log("------");
  console.log("------");
  console.log("------");
  console.log("------");
  return {
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
  };
};
