import * as api from '../api';

export const getPosts = ()=>async(dispatch)=>{
   try {
        const {data} = await api.fetchPost();
        dispatch({type: 'FETCH_ALL',payload:data});
   } catch (error) {
       console.log(error.message)

       
   }
};
export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
  
      dispatch({ type: "CREATE", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const upDAtePost = (id,post) => async (dispatch)=>{
    try {
      const {data}= await api.upDatePost(id,post);

      dispatch({type:'UPDATE', payload:data});
      
    } catch (error) {
      console.log(error.message);

      
    }
  }