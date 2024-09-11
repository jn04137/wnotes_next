'use client'

import React, { SyntheticEvent, useState } from 'react';

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';

const TipTap = () => {
	const [title, setTitle] = useState('')

	const editor = useEditor({
		extensions: [StarterKit],
		content: '<p>Hello World</p>',
		editorProps: {
			attributes: {
				class: 'px-2 py-0.5 border rounded min-h-[180px]'
			}
		},
		immediatelyRender: false,
	})


	return (
		<form className='min-w-[600px] max-w-[600px] space-y-4'>
			<input 
				name="title" 
				placeholder='enter a title...' 
				onChange={e => setTitle(e.target.value)}
				className='px-2 py-1 border rounded w-full'
			/>
			<EditorContent 
				editor={editor}
			/>
			<button 
				onClick={e => createNewNote(e, title, editor!.getHTML())}
				className="bg-blue-500 rounded w-20 py-0.5 text-white"
			>
				Post
			</button>
		</form> 
	)
}

export default TipTap;

async function createNewNote(event: SyntheticEvent, title:string, content: string) {
	event.preventDefault();

	console.log("this is the value", content);
	const res = await fetch("/note/create-note/create", {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ title: title, content: content })
	});
	const data = await res.json();

	console.log(data);
}

