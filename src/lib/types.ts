export interface NavEntry {
	title: string;
	description?: string;
	url: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Icon?: any;
}

export interface NavSection {
	title: string;
	large?: boolean;
	entries: NavEntry[];
}
