async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Page() {
  console.log("🔥 Main Server Component hoon");

  const users = await getUsers();

  return (
    <div>
      <h1>Users</h1>

      {users.map((user: any) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
