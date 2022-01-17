import { useQuill } from "react-quilljs";

import "quill/dist/quill.snow.css"; // Add css for snow theme
import { useEffect } from "react";

export function RichTextArea({ formik, name }) {
	const modules = {
		toolbar: [
			[{ header: [1, 2, 3, false] }],
			["bold", "italic"],
			[{ align: [] }],
			[{ list: "bullet" }],
		],
	};
	const { quill, quillRef } = useQuill({ modules });
	useEffect(() => {
		if (quill) {
			quill.setText(formik.values[name]);
		}
	}, [quill]);

	return (
		<>
			<div className="shadow-sm focus:ring-main-500 focus:border-main-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md">
				<div ref={quillRef} />
			</div>
		</>
	);
}
