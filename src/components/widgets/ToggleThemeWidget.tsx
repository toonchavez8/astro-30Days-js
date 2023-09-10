export default function ToggleThemeWidget() {
	const themes = [
		"light",
		"dark",
		"corporate",
		"synthwave",
		"forest",
		"lofi",
		"wireframe",
		"black",
		"dracula",
		"business",
		"night",
		"winter",
	];

	return (
		<select data-choose-theme className="select max-w-xs">
			<option disabled selected>
				Chose a theme
			</option>
			{themes.map((theme) => (
				<option key={theme} value={theme}>
					{theme.charAt(0).toUpperCase() + theme.slice(1)}
				</option>
			))}
		</select>
	);
}
