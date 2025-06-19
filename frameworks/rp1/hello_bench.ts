import Router from "jsr:@korkje/rp1@0.6.5";

const router = new Router();

router.get("/", () => new Response("Hello, Bench!"));

Deno.serve({ port: 8000, handler: router.handle });
