'use client'

import React, { useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'


function Editor() {
	const [value, setValue] = useState('')

	return(
		<div className="max-w-[600px]">
			<ReactQuill theme="snow" value={value} onChange={setValue}/>
			<button 
				className="px-2 py-0.5 bg-blue-500 rounded text-white" 
				onClick={async () => await createNewNote(value)}>
				Create Note
			</button>
		</div>
	)
}

async function createNewNote(value:string) {
	console.log("this is the value", value)
	const res = await fetch("/create-note/create", {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ editorContent: value })
	})
	const data = await res.json()

	console.log(data)
}

export default Editor
