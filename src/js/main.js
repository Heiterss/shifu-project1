import React from 'react';
import { render } from 'react-dom';
import Hello from './hello';
class Root extends React.Component {

render() {
    return (
      <div>
        <Hello hello={'Лищук Дмитрий, "Some text"'} />
      </div>
    );
  }
}
render(<Root />, document.getElementById('root'));
