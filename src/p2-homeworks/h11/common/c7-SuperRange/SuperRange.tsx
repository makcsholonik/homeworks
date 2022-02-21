import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import s from './SuperRange.module.css';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
	value1 : number
	setValueSuperRange : ( value : number ) => void

};

const SuperRange : React.FC<SuperRangePropsType> = ( props ) => {

	const {
		value1,
		setValueSuperRange,
	} = props;


	return (
		<>
			<input
				value={ value1 }
				type={ 'range' }
				onChange={ ( e ) => setValueSuperRange ( +e.currentTarget.value ) }
				// className={ finalRangeClassName }
				{ ...props } // отдаём инпуту остальные пропсы если они есть (value например там внутри)
			/>
		</>
	);
};

export default SuperRange;
