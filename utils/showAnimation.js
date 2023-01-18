export function showAnimation(sectionViewCount, baseName) {
	if (sectionViewCount < 1) {
		return 'animation-setup';
	}
	if (sectionViewCount === 1) {
		return `${baseName}-animate`;
	}
	if (sectionViewCount > 1) {
		return `${baseName}`;
	}
}
