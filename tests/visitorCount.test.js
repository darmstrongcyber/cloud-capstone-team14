
const assert = require("node:assert/strict");
const test = require("node:test");

// Simulated Cosmos DB document.
// This does not connect to Azure.
function createMockDatabase() {
  const document = {
    id: "site",
    count: 0
  };

  return {
    async incrementVisitorCount() {
      document.count += 1;
      return { ...document };
    }
  };
}

// Simulated API handler.
function createVisitorCounterHandler(database) {
  return async function visitorCount() {
    const updated = await database.incrementVisitorCount();

    return {
      status: 200,
      jsonBody: {
        count: updated.count
      }
    };
  };
}

test("First visitor increases count to 1", async () => {
  const database = createMockDatabase();
  const handler = createVisitorCounterHandler(database);

  const response = await handler();

  assert.equal(response.status, 200);
  assert.deepEqual(response.jsonBody, { count: 1 });
});

test("Three visitors increase count to 3", async () => {
  const database = createMockDatabase();
  const handler = createVisitorCounterHandler(database);

  await handler();
  await handler();
  const response = await handler();

  assert.equal(response.jsonBody.count, 3);
});

test("Visitor counter returns a numeric value", async () => {
  const database = createMockDatabase();
  const handler = createVisitorCounterHandler(database);

  const response = await handler();

  assert.equal(typeof response.jsonBody.count, "number");
});

