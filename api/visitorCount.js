
const { app } = require("@azure/functions");
const { CosmosClient } = require("@azure/cosmos");

app.http("visitorCount", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "visitorCount",

  handler: async (request, context) => {
    try {
      const connection = process.env.CosmosConnection;

      if (!connection) {
        return {
          status: 503,
          jsonBody: {
            error: "Cosmos DB is not configured yet."
          }
        };
      }

      const client = new CosmosClient(connection);
      const container = client
        .database("capstone")
        .container("visitors");

      const { resource: updated } = await container
        .item("site", "site")
        .patch([
          { op: "incr", path: "/count", value: 1 }
        ]);

      return {
        status: 200,
        jsonBody: { count: updated.count }
      };
    } catch (error) {
      context.error("Visitor counter error:", error);

      return {
        status: 500,
        jsonBody: {
          error: "Unable to update visitor count."
        }
      };
    }
  }
});
