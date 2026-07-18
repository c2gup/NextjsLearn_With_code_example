"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
function page() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      return res.json();
    },
  });
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error occurred while fetching users.</p>}
      {data && (
        <ul>
          {data.map((user: any) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default page;
