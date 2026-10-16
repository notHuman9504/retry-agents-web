// The same run seen two ways: the steps that worked, the failed attempt, and what each way does with it.
export const KEPT = 3;
const kept = [58, 34, 82];
const failed = [46, 71, 30, 88, 52, 64, 30, 93];
const undoing = [40, 66, 36, 60, 44, 72]; // the extra messages spent putting the files back

export type Bar = { width: number; wrong?: boolean; note?: boolean };
const plain = (width: number): Bar => ({ width });
const wrong = (width: number): Bar => ({ width, wrong: true });

export const bars: Record<'undo' | 'rewind', Bar[]> = {
	undo: [...kept.map(plain), ...[...failed, ...undoing].map(wrong)],
	rewind: [...kept.map(plain), ...failed.map(wrong), { width: 76, note: true }],
};

// Each side is named by a key: undoing by hand is a dark key, the rewind is the yellow one from the hero.
export const sides = {
	undo: {
		name: 'Undo by hand',
		text: 'Files restored. Context still full.',
		key: 'key--dark',
		icon: 'M9 5 L4.5 9.5 L9 14 M4.5 9.5 H14 A5 5 0 0 1 14 19.5 H10.5',
	},
	rewind: {
		name: 'Rewind',
		text: 'Files and context restored. One note added.',
		key: 'key--note',
		icon: 'M11.5 7 V17 L5 12 Z M19 7 V17 L12.5 12 Z',
	},
};
