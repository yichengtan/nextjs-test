import Link from "next/link";
import styles from "./Notes.module.css";
import CreateNote from "./CreateNote";

const getNotes = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res;
};

export default function NotesPage() {
  const notesGet = async () => {
    const notes = await getNotes();
    let data = await notes.json();
    data = data?.items as any[];

    return data?.map((note: { id: any }) => {
      return <Note key={note.id} note={note} />;
    });
  };

  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>{notesGet()}</div>
      <CreateNote />
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, username, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{username}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}
