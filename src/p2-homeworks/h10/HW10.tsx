import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import { AppStoreType } from './bll/store';
import { setLoading } from './bll/loadingReducer';

function HW10 () {

	const isLoading = useSelector<AppStoreType, boolean> ( state => state.loading.isLoading );
	const dispatch = useDispatch ();

	const setLoadingHandler = () => {
		dispatch ( setLoading ( true ) );
		setTimeout ( () => {
			dispatch ( setLoading ( false ) );
		}, 1500 );
	};

	return (
		<div>
			<hr/>
			homeworks 10
			{ isLoading
				? <div>ГДЕ_ТО_КРУТИТСЯ</div>
				: <div><SuperButton onClick={ setLoadingHandler }>set loading...</SuperButton></div>
			}
			<hr/>
			{/*для личного творчества, могу проверить*/ }
			{/*<Alternative/>*/ }
			<hr/>
		</div>
	);
}

export default HW10;
