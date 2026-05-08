import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

serve((req) => {
  const html = Deno.readTextFileSync("./index.html");
  return new Response(html, {
    headers: { "content-type": "text/html" },
  });
});
