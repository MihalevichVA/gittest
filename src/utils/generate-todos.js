export const generateTodos = (n = 5000) => {
  const todos = []
  for (let i = 0; i < n; i++) {
    todos.push(generateTodo())
  }
  return todos
}

const generateTodo = () => ({
  done: Math.random() > 0.5,
  name: getRandomString(),
  id: Date.now() + getRandomString(),
})

const getRandomString = () =>
  Math.random().toString(36).substring(2)
