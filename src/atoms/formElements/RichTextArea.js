import { useQuill } from "react-quilljs";

import "quill/dist/quill.snow.css"; // Add css for snow theme
import { useEffect } from "react";

export function RichTextArea({ formik }) {
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
			quill.clipboard.dangerouslyPasteHTML(
				"<h1>Popis</h1><p>Zde napiště popis čím se zabýváte, nabízíte...</p> <h2>Další informace o vás</h2><p>K našim zákazníkům se přistupujeme s úctou ...</p>",
			);
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
