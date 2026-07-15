import React from "react";

async function page() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (res) => res.json(),
  );
  return (
    <div>
      <h1>Server Component</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default page;
