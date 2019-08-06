const initState = {
  projects: 0
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_PROJECT':
      console.log('change ', action.project);
      return action.project;
    default:
      return state;
  }
};

export default projectReducer;