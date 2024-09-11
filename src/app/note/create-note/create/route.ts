import * as repo from "../../../repositories/NoteRepository"

export async function POST(request: Request) {
	const data = await request.json()
	repo.createNote(data.title, data.content)
	console.log(data)

	return Response.json({ "message": request.body })
}
