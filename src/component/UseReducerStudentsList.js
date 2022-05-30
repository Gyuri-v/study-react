function UseReducerStudentsList({ name, dispatch, id }) {
  return (
    <div className="useReducer_students-list">
      <span>{name}</span>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'delete-students', payload: id });
        }}
      >
        삭제
      </button>
    </div>
  );
}

export default UseReducerStudentsList;
