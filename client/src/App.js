import Users from './Users.js';
import Questions from './Questions.js';

function App() {
  return (
    <div className='container'>
      <div className='row justify-content-start bg-info p-2 mx-auto rounded' >
        <div className='border border-dark row-4 gx-5 px-5 pt-5 pb-5'>
        <Users/>
      </div>
      <div className='border border-dark row-4 gx-5 px-5'>
        <Questions/>
      </div>
      </div>
    </div>
  );
}

export default App;
