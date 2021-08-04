import { useCallback, useState, Fragment, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import SingleFileUploadWithProgress from './SingleFileUploadWithProgress';
import { BarLoader } from 'react-spinners';
import { useField } from 'formik';
import UploadError from './UploadError';

export default function MultipleFileUploadFields({ name }) {
	const [ _, __, helpers ] = useField(name);
	const [ files, setFiles ] = useState([]);

	const onDrop = useCallback((accFiles, rejFiles) => {
		// Do something with the files
		const mapedAcc = accFiles.map((file) => ({ file, erros: [] }));
		setFiles((curr) => [ ...curr, ...mapedAcc, ...rejFiles ]);
	}, []);

	useEffect(
		() => {
			helpers.setValue(files);
			// helpers.setTouched(true);
			// helpers.setError(false);
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
			<div {...getRootProps()} className="mt-7">
				<input {...getInputProps()} />
				<p className="bg-purple-200 px-3 py-6 text-center rounded-md  border border-dashed border-gray-500 ">
					Drag and drop files here or click to select files
				</p>
			</div>

			{files.map((fileWrapper, i) => (
				<div key={i} className="mt-5 ">
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
