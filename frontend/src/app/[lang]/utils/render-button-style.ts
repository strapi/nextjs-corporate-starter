export function renderButtonStyle(type: string) {
	switch (type) {
		case "primary":
			return "px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900";
		case "secondary":
			return "px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100";
		default:
			return "px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900";
	}
}
