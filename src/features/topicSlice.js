import { createSlice } from '@reduxjs/toolkit';

export const topicSlice = createSlice({
  name: 'topic',
  initialState: {
    topicId: null,
    topicName:null,
  },
  reducers: {
    setTopicInfo:( state,action) => {
      state.topicId= action.payload.topicId;
      state.topicName= action.payload.topicName;
    },
 
  
  },
});

export const { setTopicInfo } = topicSlice.actions;

export const selectTopicId = (state) => state.topic.topicId;
export const selectTopicName=(state)=>state.topic.topicName;

export default topicSlice.reducer;
