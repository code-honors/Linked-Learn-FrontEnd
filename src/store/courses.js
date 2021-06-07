let initialState = {
  courses: [],
  display: [],
};

const courses = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'GET':
      return { courses: payload, display: state.display };
    case 'FILTER':
      let courses = state.courses.filter(
        (course) => course.category === payload
      );
      return { courses: state.courses, display: courses };
    default:
      return state;
  }
};

export default courses;
