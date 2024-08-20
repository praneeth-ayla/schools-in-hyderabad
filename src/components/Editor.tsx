"use client";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import {
	BlockNoteView,
	darkDefaultTheme,
	lightDefaultTheme,
	Theme,
} from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { PartialBlock, BlockNoteEditor, Block } from "@blocknote/core";
import { uploadFiles } from "@/utils/uploadthing";

interface EditorProps {
	initialContent?: string;
	editable?: boolean;
	blockTextHandler: (blocks: Block[]) => void;
}

// Base theme
const lightRedTheme = {
	colors: {
		editor: {
			text: "#000",
			background: "#000",
		},
		menu: {
			text: "#ffffff",
			background: "#000",
		},
		tooltip: {
			text: "#ffffff",
			background: "#000",
		},
		hovered: {
			text: "#ffffff",
			background: "#000",
		},
		selected: {
			text: "#ffffff",
			background: "#000",
		},
		disabled: {
			text: "#9b0000",
			background: "#000",
		},
		shadow: "#000",
		border: "#000",
		sideMenu: "#bababa",
		highlights: lightDefaultTheme.colors!.highlights,
	},
	fontFamily: "Helvetica Neue, sans-serif",
} satisfies Theme;

// The theme for dark mode,
// users the light theme defined above with a few changes
const darkRedTheme = {
	...lightRedTheme,
	colors: {
		...lightRedTheme.colors,
		editor: {
			text: "#ffffff",
			background: "#kkk00",
		},
		sideMenu: "#ffffff",
		highlights: darkDefaultTheme.colors!.highlights,
	},
} satisfies Theme;

// The combined "red theme",
// we pass this to BlockNoteView and then the editor will automatically
// switch between lightRedTheme / darkRedTheme based on the system theme
const redTheme = {
	light: lightRedTheme,
	dark: darkRedTheme,
};

// Our <Editor> component we can reuse later
export default function Editor({
	initialContent,
	editable,
	blockTextHandler,
}: EditorProps) {
	// Creates a new editor instance.

	const editor: BlockNoteEditor = useCreateBlockNote({
		initialContent: initialContent
			? (JSON.parse(initialContent) as PartialBlock[])
			: undefined,
		uploadFile: async (file: File) => {
			const [res] = await uploadFiles("imageUploader", { files: [file] });
			return res.url;
		},
	});

	// Renders the editor instance using a React component.
	return (
		<div>
			<BlockNoteView
				editor={editor}
				editable={editable}
				theme={redTheme}
				onChange={() => {
					blockTextHandler(editor.document);
				}}
			/>
		</div>
	);
}
