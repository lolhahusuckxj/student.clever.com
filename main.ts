const html = await Deno.readTextFile("./index.html");

Deno.serve((req) => {
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
});
