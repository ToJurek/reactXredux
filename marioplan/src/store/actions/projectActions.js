export const changeProject = (project) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'CHANGE_PROJECT', project });
  }
};