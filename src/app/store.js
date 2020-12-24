import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import projectReducer from '../features/projectSlice';
import topicReducer from '../features/topicSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    project : projectReducer,
    topic:topicReducer,

  },
});
