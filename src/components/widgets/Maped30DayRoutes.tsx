import dayLinks from "@/db/links";

export default function Maped30DayRoutes() {
	// Define a function to check if a page is done
	function isPageDone(pageName: string) {
		// we want to find an object with pagename in the db
		const status = dayLinks.find(({ page }) => page === pageName);
		// return the object alone
		if (status) {
			return status.done;
		}
		return false;
	}

	return (
		<ul className="p-2 z-10 scroll-smooth snap-y snap-start menu ">
			<li>
				<a className="menu-title  " href="/30days">
					30 Days
				</a>
				<ul>
					{dayLinks.map((link: { page: string }) => {
						const pageName = String(link.page).slice(0, -6); // Convert link to a string and then slice the last 6 characters (.astro)
						const isDone = isPageDone(link.page); // Check if the page is done
						// Determine the class based on whether the page is done or not
						const linkClass = isDone ? "" : "btn-disabled";
						return (
							<li key={pageName}>
								<a
									href={`/day/${pageName}`}
									className={`block ${linkClass} cursor-pointer`}
									// Add other tailwind classes or styles as needed
								>
									{pageName}
								</a>
							</li>
						);
					})}
				</ul>
			</li>
		</ul>
	);
}
