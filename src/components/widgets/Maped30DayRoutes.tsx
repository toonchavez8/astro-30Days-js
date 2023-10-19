import dayLinks from "@/db/links";

// Define TypeScript types for your data
interface DayLink {
	page: string;
	done: boolean;
}

interface Props {
	ActiveLink: string;
}

export default function Maped30DayRoutes({ ActiveLink }: Props) {
	// Define a function to check if a page is done
	function isPageDone(pageName: string) {
		// we want to find an object with pagename in the db
		const status = dayLinks.find(({ page }) => page === pageName);
		// return the object alone if found
		if (status) {
			return status.done;
		}

		// if not return false anyways
		return false;
	}

	// function to change remove hyphens from page names
	function getlegiblePageNames(pageName: string) {
		const legibleName = pageName.replace(/-/g, " ");

		return legibleName;
	}

	function isActiveLink(pageLinks: string): boolean {
		// Check if pageLinks is equal to ActiveLink
		return pageLinks === ActiveLink;
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

						const legiblePageNames = getlegiblePageNames(pageName);

						// Determine the class based on whether the page is done or not
						const linkClass = isDone
							? "text-primary hover:text-secondary"
							: "btn-disabled opacity-25";

						const checkActiveLink = isActiveLink(pageName) ? "text-accent" : "";
						return (
							<li key={pageName}>
								<a
									href={`/day/${pageName}`}
									className={`block ${linkClass} ${checkActiveLink} cursor-pointer capitalize`}
								>
									{legiblePageNames}
								</a>
							</li>
						);
					})}
				</ul>
			</li>
		</ul>
	);
}
