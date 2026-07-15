"use client";

import React from "react";

function page() {
  const [title, setTitle] = React.useState("");
  const [completed, setCompleted] = React.useState(false);
  const [responseData, setResponseData] = React.useState<any>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      userId: 1,
      title,
      completed,
    };

    fetch("/api/todoPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Response from server:", data);
        // Handle the response from the server if needed
        setResponseData(data);
        setTitle("");
        setCompleted(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle any errors that occurred during the request
      });
  };
  return (
    <div>
      <h1>Todo Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="completed">Completed:</label>
          <input
            type="checkbox"
            id="completed"
            name="completed"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </div>
        <button type="submit">Add Todo</button>
      </form>

      <div>
        <h2>Response Data:</h2>
        <pre>{JSON.stringify(responseData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default page;
