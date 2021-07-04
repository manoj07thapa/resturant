import React from 'react';
import { FileError } from 'react-dropzone';
import { FileHeader } from './FileHeader';

export default function UploadError({ file, onDelete, errors }) {
	return (
		<React.Fragment>
			<div className="flex items-center">
				<FileHeader file={file} onDelete={onDelete} />
				{errors.map((error) => (
					<div key={error.code}>
						<h4 className="text-red-500">{error.message}</h4>
					</div>
				))}
			</div>
		</React.Fragment>
	);
}
