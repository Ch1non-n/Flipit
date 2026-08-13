# Flipit

Minimal, touch-friendly flashcard app built with Next.js, Tailwind, Framer Motion and Firebase.

## Run locally

1. Install Node.js 20+ and run `npm install`.
2. Copy `.env.local.example` to `.env.local`, then fill in the Firebase Web App values.
3. In Firebase Console, enable **Google** under Authentication → Sign-in method and create a Cloud Firestore database.
4. Publish the contents of `firestore.rules` in Firestore Rules, create a Firebase Storage bucket, then publish `storage.rules` in Storage Rules.
5. Run `npm run dev` and visit `http://localhost:3000`.

Without Firebase configuration, Flipit still works with the included sample deck and newly created cards remain only in the current browser session. With Firebase signed in, cards are stored in `users/{uid}/cards` and sync live across devices. Drawings are compressed to a 360×216 WebP image, uploaded to Firebase Storage, and Firestore stores only their small download URLs.

## Included experience

- Text or pen/touch/mouse drawing surfaces, color, brush size, eraser, undo and clear.
- Deck and tag metadata.
- Per-card session selection, 3D classic flip and four-choice quiz.
- Synthesized flip/correct/wrong effects via Web Audio API.
- Responsive PWA manifest and an end-of-session score view.

> Existing cards that already store a Base64 drawing continue to work. Newly saved cloud cards use Firebase Storage, which avoids Firestore's 1 MiB document limit and lets you keep a large drawing library.
