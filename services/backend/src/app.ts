import Fastify from "fastify";

export function buildApp() {
  const app = Fastify({
    logger: false
  });

  app.get("/health", async () => ({
    status: "ok",
    service: "@trt/backend"
  }));

  return app;
}
