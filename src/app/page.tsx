export default async function Home() {
	console.log(process.env.NEXT_PUBLIC_URL);

	const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/note/get-note`);
	const notes = await data.json();

	return(
		<div>
			This is the home page
			{ JSON.stringify(notes) }
		</div>
	)
}

