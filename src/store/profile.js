let initialState = {
    profile: {},
    tCourses: []
  };
  
  const profile = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
      case 'GET_P':
        return { profile: payload, tCourses:state.tCourses };
      case 'GET_TC':
        return {profile: state.profile, tCourses: payload };
      default:
        return state;
    }
  };
  
  export default profile;