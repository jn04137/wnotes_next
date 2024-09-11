import dynamic from 'next/dynamic';

const TipTap = dynamic(() => import("../create-note/editor"), {ssr: false})

export default function EditorPage() {

  return (
    <main className="flex justify-center">
			<div className="flex flex-col space-y-2">
				<h1 className="text-xl">Create note</h1>
				<TipTap />
			</div>
    </main>
  );
}
