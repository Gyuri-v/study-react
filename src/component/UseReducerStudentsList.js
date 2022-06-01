function UseReducerStudentsList({ ACTION_TYPES, name, dispatch, id, isHere }) {
  return (
    <div className="useReducer_students-list">
      <span
        style={{
          textDecoration: isHere ? 'line-through' : 'none',
          color: isHere ? 'gray' : 'black',
        }}
        onClick={() => {
          dispatch({ type: ACTION_TYPES.mark, payload: { id } });
        }}
      >
        {name}
      </span>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: ACTION_TYPES.delete, payload: { id } });
        }}
      >
        삭제
      </button>
    </div>
  );
}

export default UseReducerStudentsList;
