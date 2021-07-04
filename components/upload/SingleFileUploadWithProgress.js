import React, { useEffect, useState, Fragment } from 'react';
import { FileHeader } from './FileHeader';
import { BounceLoader } from 'react-spinners';
import Image from 'next/image';

export default function SingleFileUploadWithProgress({ file, onDelete, onUpload }) {
	const [ progress, setProgress ] = useState(0);
	const [ imgUrl, setImgUrl ] = useState('');

	useEffect(() => {
		async function upload() {
			const url = await uploadFile(file, setProgress);
			setImgUrl(url);

			onUpload(file, url);
		}

		upload();
	}, []);

	return (
		<Fragment>
			{imgUrl.length > 0 && <FileHeader file={file} onDelete={onDelete} imgUrl={imgUrl} />}
			{/* <div value={progress} /> */}
		</Fragment>
	);
}

function uploadFile(file, onProgress) {
	const url = 'https://api.cloudinary.com/v1_1/karma-777/image/upload';
	const key = 'mystore';

	return new Promise((res, rej) => {
		const xhr = new XMLHttpRequest();
		xhr.open('POST', url);

		xhr.onload = () => {
			const resp = JSON.parse(xhr.responseText);
			res(resp.secure_url);
		};
		xhr.onerror = (evt) => rej(evt);
		xhr.upload.onprogress = (event) => {
			if (event.lengthComputable) {
				const percentage = event.loaded / event.total * 100;
				onProgress(Math.round(percentage));
			}
		};

		const formData = new FormData();
		formData.append('file', file);
		formData.append('upload_preset', key);
		formData.append('cloud_name', 'karma-777');

		xhr.send(formData);
	});
}
