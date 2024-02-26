import { getClient } from "./utils";

async function createEntries(email: string, pw: string) {
  const client = await getClient();
  try {
    const insertUserText =
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id";

    const userValues = [email, pw];

    let response = await client.query(insertUserText, userValues);

    const insertTodoText =
      "INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id";

    const todoValues = [
      "Buy groceries",
      "Milk, bread, and eggs",
      response.rows[0].id,
      false,
    ];

    await client.query(insertTodoText, todoValues);

    console.log("Entries created!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

createEntries("harsh@gmailll.com", "pwpwpwpw12121212");
createEntries("harshbatra@gmailll.com", "pwpwpwpw12121212");
createEntries("harshyyyyy@gmailll.com", "pwpwpwpw12121212");
createEntries("batraaaaa@gmailll.com", "pwpwpwpw12121212");
