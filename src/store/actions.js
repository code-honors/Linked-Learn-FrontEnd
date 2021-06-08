import superagent from 'superagent';
// const api = 'https://run.mocky.io/v3/86db0ece-4dea-44d6-9913-3fd9c13b03aa';

export const getRemoteData = function (api , data) {
  console.log('step 2: actions first', api);
  return (dispatch) => {
    console.log('step 3: actions second', dispatch);
    return superagent
      .get(api)
      .then((res) => {
        console.log('step 4: actions third', res.body);
        if(data === 'courses'){
          dispatch(getCourses({ courses: res.body }));
        }else if(data === 'teachers'){          
          dispatch(getTeachers({ teachers: res.body }));
        }
      })
      .catch((e) => console.error(e.message));
  };
};

export const getCourses = ({ courses }) => {
  console.log('step 5: courses action', courses);
  return {
    type: 'GET_C',
    payload: courses,
  };
};
export const getTeachers = ({ teachers }) => {
  console.log('step 5: teachers action', teachers);
  return {
    type: 'GET_T',
    payload: teachers,
  };
};

export const filter = (category) => {
  return {
    type: 'FILTER',
    payload: category,
  };
};
