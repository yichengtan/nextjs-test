import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotesPage from "../../src/app/notes/page";
import HomePage from "../../src/app/page";
import getNotes from "../../src/app/notes/page";
import * as NotePageStuff from "../../src/app/notes/page";
import * as sinon from "sinon";
import React from "react";

describe("Home", () => {
  let mockNoteApi: sinon.SinonStub;

  beforeEach(() => {
    mockNoteApi = sinon.stub(window, "fetch").resolves({
      collectionId: "prluf83vj2t9axj",
      collectionName: "notes",
      content: "1",
      created: "2023-05-31 07:55:36.647Z",
      id: "4dfa4hmv2tngnyh",
      title: "1",
      updated: "2023-05-31 07:55:36.647Z",
    });
  });

  afterEach(() => {
    mockNoteApi.restore();
  });

  it("renders a heading", () => {
    render(<NotesPage />);

    // const pagelink = screen.getByRole("link", {
    //   name: /this page!/i,
    // });

    // expect(pagelink).toBeInTheDocument();
  });
});
