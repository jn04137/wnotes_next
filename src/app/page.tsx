interface Note {
	title: string,
	content: string
}


export default async function Home() {
	console.log(process.env.NEXT_PUBLIC_URL);

	const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/note/get-note`);
	const notes = await data.json();

	return(
		<div>
			This is the home page
			{ notes.listOfNotes.map((note: Note) => ( <NoteCard note={note} />)) }
		</div>
	)


}

function NoteCard({note}: {note: Note}) {
	return (
		<div>
			<h1>{note.title}</h1>
			<div dangerouslySetInnerHTML={{__html: note.content}} />
		</div>
	)
}

