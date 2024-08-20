"use client";
import BlockNoteEditor from "@/components/BlockNoteEditor";
import { Block } from "@blocknote/core";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";

export default function page() {
	const Editor = useMemo(
		() =>
			dynamic(() => import("../../components/Editor"), {
				ssr: false,
			}),
		[]
	);
	const text = `
	[{"id":"0517dcdb-dae5-415e-a9d8-eb4f9e0e7625","type":"image","props":{"backgroundColor":"default","textAlignment":"center","name":"agentP.jpg","url":"https://utfs.io/f/62dca12d-1d3b-4103-a101-371856bcbe45-nh92j9.jpg","caption":"","showPreview":true,"previewWidth":296},"children":[]},{"id":"7d5e8464-0c00-47f4-84a9-128cc210b4c2","type":"heading","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left","level":1},"content":[{"type":"text","text":"hi how are you doing today","styles":{}}],"children":[]},{"id":"92a607ea-3719-4ec5-8eb7-49e5707ad0ab","type":"heading","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left","level":2},"content":[{"type":"text","text":"how are you ","styles":{}}],"children":[]},{"id":"281c88c7-8e7d-4cd3-bfae-568948cf1f28","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[],"children":[]}]
	`;
	const [blockText, setBlockText] = useState<Block[]>([]);
	return (
		<div className="bg-white p-20 border">
			<Editor
				blockTextHandler={setBlockText}
				editable={false}
				initialContent={text}
			/>
			{JSON.stringify(blockText)}
		</div>
	);
}
