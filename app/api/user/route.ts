export async function GET(request: Request) {
  console.log("Request received");

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  const data = await res.json();

  return Response.json(data);
}