import TodoList from "./TodoList";

export default function App() {
  return (
    <div className="App">
      <TodoList />
      <small style={{ position: "absolute", bottom: "0" }}>
        Project 101 Assignemnt by Kirti Sharma | discord:{" "}
        <mark>kirti Sharma #2577</mark>
      </small>
    </div>
  );
}
