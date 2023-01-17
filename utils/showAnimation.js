export function showAnimation(sectionViewCount, baseName) {
	if (sectionViewCount < 1) {
		return '';
	}
	if (sectionViewCount === 1) {
		return `${baseName}-animate`;
	}
	if (sectionViewCount > 1) {
		return `${baseName}`;
	}
}
