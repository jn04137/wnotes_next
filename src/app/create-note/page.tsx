import dynamic from 'next/dynamic';

const Editor = dynamic(() => import("../create-note/editor"), {ssr: false})

export default function EditorPage() {

  return (
    <main className="">
			<Editor/>
    </main>
  );
}
