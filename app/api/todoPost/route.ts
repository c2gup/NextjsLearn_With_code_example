interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

const todos: Todo[] = [];

export async function POST(request: Request) {
  const body = await request.json();

  const newTodo: Todo = {
    id: todos.length + 1,
    ...body,
  };

  todos.push(newTodo);

  return Response.json({
    success: true,
    message: "Todo added successfully",
    data: todos,
  });
}