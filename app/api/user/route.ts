
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const todo: Todo[] = [];

export async function GET(request: Request) {
  console.log("Request received");

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  const data = await res.json();

  todo.push(...data);
  return Response.json({
    status: "success",
    message: "Data fetched successfully",
    statusCode: 200,
    success: true,
    data: todo,
  });
}