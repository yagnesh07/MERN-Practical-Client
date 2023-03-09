import axios from 'axios';
export const adminLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: 'ADMIN_LOGIN_REQUEST' });
    
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post('http://localhost:8000/api/login', { email, password }, config)

    dispatch({
      type: 'ADMIN_LOGIN_SUCCESS',
      payload: data
    });
    
  } catch (error) {
    dispatch({
      type: 'ADMIN_LOGIN_FAIL',
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
}
