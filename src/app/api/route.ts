import { NextResponse } from "next/server"

type Params = {
	message: string
}

export async function GET(request: Request, context: { params: Params }) {
	return NextResponse.json({ message: 'some fun message' }, { status: 200 })
}
