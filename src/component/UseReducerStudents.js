import { useReducer, useState } from 'react';
import UseReducerStudentsList from './UseReducerStudentsList';

const ACTION_TYPES = {
  add: 'add',
  delete: 'delete',
  mark: 'mark',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.add:
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
    case ACTION_TYPES.delete:
      return {
        count: state.count - 1,
        students: state.students.filter((student) => student.id !== action.payload.id),
      };
    case ACTION_TYPES.mark:
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            console.log(student.isHere);
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
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
            dispatch({ type: ACTION_TYPES.add, payload: { name } });
          }}
        >
          추가
        </button>
        {studentsInfo.students.map((student) => {
          return <UseReducerStudentsList key={student.id} name={student.name} dispatch={dispatch} id={student.id} isHere={student.isHere} ACTION_TYPES={ACTION_TYPES} />;
        })}
      </div>
    </div>
  );
}

export default UseReducerStudents;
