// netlify/functions/users.ts
import { type Handler, type HandlerEvent, type HandlerContext } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // The logic from your Express route goes here
  const users = [{ id: 1, name: "Sandeep" }];

  // You can check the HTTP method like this
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Return a response object
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(users),
  };
};

export { handler };