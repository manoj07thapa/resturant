import { useCallback, useState, Fragment, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import SingleFileUploadWithProgress from './SingleFileUploadWithProgress';
import { BarLoader } from 'react-spinners';
import { useField } from 'formik';
import UploadError from './UploadError';

export default function MultipleFileUploadFields({ name }) {
	const [ files, setFiles ] = useState([]);

	const [ _, __, helpers ] = useField(name);

	const onDrop = useCallback((accFiles, rejFiles) => {
		// Do something with the files
		const mapedAcc = accFiles.map((file) => ({ file, erros: [] }));
		setFiles((curr) => [ ...curr, ...mapedAcc, ...rejFiles ]);
	}, []);

	useEffect(
		() => {
			helpers.setValue(files);
			// helpers.setTouched(true);
		},
		[ files ]
	);

	function onUpload(file, url) {
		setFiles((curr) =>
			curr.map((fw) => {
				if (fw.file === file) {
					return { ...fw, url };
				}
				return fw;
			})
		);
	}

	function onDelete(file) {
		setFiles((curr) => curr.filter((fw) => fw.file !== file));
	}

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: 'image/*'
		// maxSize: 300 * 1024 // 300KB
	});

	return (
		<Fragment>
			<div {...getRootProps()} className="mt-4">
				<input {...getInputProps()} />
				<p className="bg-yellow-200 px-3 py-4 rounded-lg ">
					Drag and drop some files here, or click to select files
				</p>
			</div>

			{files.map((fileWrapper, i) => (
				<div key={i}>
					{fileWrapper.errors ? (
						<UploadError file={fileWrapper.file} errors={fileWrapper.errors} onDelete={onDelete} />
					) : (
						<SingleFileUploadWithProgress onDelete={onDelete} onUpload={onUpload} file={fileWrapper.file} />
					)}
				</div>
			))}
		</Fragment>
	);
}
