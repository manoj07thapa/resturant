import { useState, useEffect } from 'react';
import { useField } from 'formik';

export default function RangeSlider({ label, ...props }) {
	const [ value, setValue ] = useState(1000);
	const [ field, meta, helpers ] = useField(props);

	// useEffect(
	// 	() => {
	// 		helpers.setValue(value);
	// 		// helpers.setTouched(true);
	// 		// helpers.setError(false);
	// 	},
	// 	[ value ]
	// );

	const handleChange = (e) => setValue(e.target.value);

	return (
		<div className="flex items-center">
			<label className="text-white">
				{label}
				<input {...field} {...props} />
			</label>
			{meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
			<div />
		</div>
	);
}
