"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function CreateNote() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const router = useRouter();

  const create = async (e: any) => {
    await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
        password: "123456",
        passwordConfirm: "123456",
      }),
    });

    setContent("");
    setTitle("");

    router.refresh();
  };

  return (
    <form onSubmit={create}>
      <h3>Create new note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Create</button>
    </form>
  );
}
