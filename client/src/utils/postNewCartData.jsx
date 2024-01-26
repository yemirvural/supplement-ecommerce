import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../features/cart/postCartData";
import { setError } from "../features/cart/postCartData";


const postNewCartData = async ({ userId, data }) => {
    const [cartData, setCartData] = useState();
    const loading = useSelector(state.postCartData.loading)
    const error = useSelector(state.postCartData.error)
    const dispatch = useDispatch();
    
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));

        const response = await axios.post(`http://localhost:3000/cart/${userId}`, data);
        dispatch(setCartData(response.data.products));
    } catch (error) {
        console.error('Error posting data:', error);
        dispatch(setError('Error posting data'));
    } finally {
        dispatch(setLoading(false));
    }
};


export default postNewCartData;