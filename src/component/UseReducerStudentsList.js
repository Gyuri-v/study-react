function UseReducerStudentsList({ name, dispatch, id, isHere }) {
  return (
    <div className="useReducer_students-list">
      <span
        style={{
          textDecoration: isHere ? 'line-through' : 'none',
          color: isHere ? 'gray' : 'black',
        }}
        onClick={() => {
          dispatch({ type: 'mark-student', payload: { id } });
        }}
      >
        {name}
      </span>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'delete-students', payload: { id } });
        }}
      >
        삭제
      </button>
    </div>
  );
}

export default UseReducerStudentsList;
