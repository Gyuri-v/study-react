import { useReducer, useState } from 'react';
import UseReducerStudentsList from './UseReducerStudentsList';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add-students':
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name: name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case 'delete-students':
      return {
        count: state.count - 1,
        students: state.students.filter((student) => student.id !== action.payload.id),
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [],
};

function UseReducerStudents() {
  const [name, setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="contents">
      <h2 className="contents-title">출석부</h2>
      <p className="contents-text">총 학생 수 : {studentsInfo.count}</p>
      <div className="useReducer-form">
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            dispatch({ type: 'add-students', payload: { name } });
          }}
        >
          추가
        </button>
        {studentsInfo.students.map((student) => {
          return <UseReducerStudentsList key={student.id} name={student.name} dispatch={dispatch} id={student.id} />;
        })}
      </div>
    </div>
  );
}

export default UseReducerStudents;
