export type Side = { text?: string; drawing?: string; drawingPath?: string };
export type Flashcard = { id: string; deck: string; tags: string[]; front: Side; back: Side; createdAt: number };
export type StudyMode = "flip" | "quiz";
