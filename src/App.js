import './App.css';
import DarkMode from './component/DarkMode';
import SelectList from './component/SelectList';
import TodoList from './component/TodoList';

function App() {
  return (
    <>
      <TodoList />
      <hr/>
      <SelectList />
      <hr/>
      <DarkMode />
    </>
  )
}

export default App;
