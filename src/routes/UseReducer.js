import UseReducerBank from '../component/UseReducerBank';
import UseReducerStudents from '../component/UseReducerStudents';

function UseReducer() {
  return (
    <div className="container">
      <h2 className="container-title">useReducer</h2>
      <UseReducerBank />
      <UseReducerStudents />
    </div>
  );
}

export default UseReducer;
