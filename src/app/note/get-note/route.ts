import { NextResponse } from 'next/server'
import * as repo from "../../repositories/NoteRepository"

type Params = {
	message: string
}

export async function GET(request: Request, context: { params: Params }) {

	const notes = await repo.getNotes()
	return NextResponse.json({ listOfNotes: notes }, {status: 200});
}
