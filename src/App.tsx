import {ReactElement} from 'react';
import { Form } from './components/form/Form';
import { List } from './components/list/List';
import { useSelectorType } from './redux/hooks';



function App(): ReactElement {
  const todos = useSelectorType(state => state.todos)



  return (
    <div className="App">
      <h1>TYPE TODO </h1>
      <Form/>
      <List/>
    </div>
  );
}

export default App;
