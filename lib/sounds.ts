export function playSound(kind: "flip" | "correct" | "wrong") {
  const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  const ctx = new Ctx(); const osc = ctx.createOscillator(); const gain = ctx.createGain(); osc.connect(gain); gain.connect(ctx.destination);
  const tone = kind === "flip" ? 350 : kind === "correct" ? 880 : 150;
  osc.type = kind === "wrong" ? "sawtooth" : "sine"; osc.frequency.setValueAtTime(tone, ctx.currentTime);
  if (kind === "correct") osc.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + .16);
  gain.gain.setValueAtTime(.09, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + (kind === "wrong" ? .28 : .22)); osc.start(); osc.stop(ctx.currentTime + .3);
}
