import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTypesRequest } from '../services/redux/actions/types';


export default () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTypesRequest());
    }, []);

    const types = useSelector(state => state.types);

    const { data, isLoading } = types;

    return [data, isLoading];
}