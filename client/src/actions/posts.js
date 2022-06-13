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
  
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const upDatePost = (id,post) => async (dispatch)=>{
    try {
      const {data}= await api.upDatePost(id,post);

      dispatch({type:'UPDATE', payload:data});
      
    } catch (error) {
      console.log(error.message);

      
    }
  };
  export const deletePost = (id,post) => async(dispatch) =>{
    try {
      await api.deletePost(id,post);

      dispatch({type:'DELETE' ,payload:id})
      
    } catch (error) {
      console.log(error);
      
    }
  };

  export const likePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
  
      dispatch({ type: 'LIKE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };