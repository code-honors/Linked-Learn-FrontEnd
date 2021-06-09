let initialState = {
    teachers: [],
  };
  
  const teachers = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
      case 'GET_T':
        console.log(1)
        return { teachers: payload };
      default:
        return state;
    }
  };
  
  export default teachers;
  