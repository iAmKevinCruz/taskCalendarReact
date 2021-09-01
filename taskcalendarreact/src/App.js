import { library } from '@fortawesome/fontawesome-svg-core';
import "@fortawesome/fontawesome-svg-core";
import { fas} from '@fortawesome/free-solid-svg-icons';
import { far} from '@fortawesome/free-regular-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import TaskInput from './components/taskInput';

library.add(fas, far);


function App() {
  return (
    <div className="">
      <TaskInput></TaskInput>
    </div>
  );
}

export default App;
