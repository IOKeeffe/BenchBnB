import merge from 'lodash/merge';

const UiReducer = (oldState = {loading: false}, action) => {
  Object.freeze(oldState);

  const newState = merge({}, oldState);

  switch(action.type) {

  }
}
