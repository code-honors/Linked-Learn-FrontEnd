let initialState = {
    teachers: [],
  };
  
  const teachers = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
      case 'GET_T':
        return { teachers: payload };
      default:
        return state;
    }
  };
  
  export default teachers;
  