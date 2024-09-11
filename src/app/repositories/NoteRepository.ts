import dbConn from '../lib/database'


export function createNote(title: string, content: string) {
	const query = "INSERT INTO Note (title, content) VALUE (?, ?)"
	try {
		dbConn.query(query, [title, content]);
	} catch(e: any) {
		console.log(e);
	}
}

export async function getNotes() {
	const query = "SELECT title,content FROM Note";

	try {
		const [results] = await dbConn.query(query);
		console.log(results);
		return results;
	} catch(e) {
		console.log(e);
	}
}
