import { useMediaQuery } from 'react-responsive'
import { Link, NavLink } from 'react-router-dom'

import { LINKS } from '../layout/links'
import MobileHeader from '../layout/MobileHeader'

export const Header = () => {
	const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' })

	return isTabletOrDesktop ? (
		<header className="container flex items-baseline justify-between py-8">
			<Link className="font-heading text-2xl leading-none font-bold" to="/">
				Alizeh Khan
			</Link>
			<nav>
				<ul className="flex items-center gap-6 text-lg">
					{LINKS.map((link, index) => (
						<li key={index}>
							<NavLink to={link.to}>{link.name}</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	) : (
		<MobileHeader />
	)
}
