import { getClient } from "./utils";

async function deleteTodo(todoId: number) {
  const client = await getClient();
  try {
    const deleteTodoText = "DELETE FROM todos WHERE id = $1";
    await client.query(deleteTodoText, [todoId]);

    console.log(`Todo with ID ${todoId} deleted!`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

const todoIdToDelete = 1;
deleteTodo(todoIdToDelete);
