import { IconMenu2, IconX } from '@tabler/icons-react'
import { KeyboardEvent, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { MobileNav } from './MobileNav'

const MobileHeader = () => {
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
	const MobileNavRef = useRef<HTMLDivElement>(null)

	const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
		if (isMobileNavOpen && event.key === 'Tab') {
			const focusableEls = MobileNavRef.current?.querySelectorAll(
				'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
			)

			const firstFocusableEl = focusableEls?.[0] as HTMLElement | undefined
			const lastFocusableEl = focusableEls?.[focusableEls.length - 1] as
				| HTMLElement
				| undefined

			if (event.shiftKey) {
				if (document.activeElement === firstFocusableEl) {
					lastFocusableEl?.focus()
					event.preventDefault()
				}
			} else {
				if (document.activeElement === lastFocusableEl) {
					firstFocusableEl?.focus()
					event.preventDefault()
				}
			}
		}
	}

	return (
		<header
			className={`container ${
				isMobileNavOpen ? 'h-screen bg-neutral-100' : ''
			}`}
			onKeyDown={handleKeyDown}
			ref={MobileNavRef}
		>
			<div className="flex items-center justify-between py-3">
				<Link
					className="font-heading text-2xl leading-none font-bold"
					to="/"
					onClick={() => setIsMobileNavOpen(false)}
				>
					Alizeh Khan
				</Link>
				<button
					className="-mr-3 flex items-center gap-1 bg-transparent p-3"
					aria-expanded={isMobileNavOpen}
					aria-controls="primary-menu"
					onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
				>
					{isMobileNavOpen ? 'Close' : 'Menu'}
					{isMobileNavOpen ? (
						<IconX color="currentColor" size={24} aria-hidden={true} />
					) : (
						<IconMenu2 color="currentColor" size={24} aria-hidden={true} />
					)}
				</button>
			</div>
			{isMobileNavOpen && (
				<MobileNav
					setIsMobileNavOpen={setIsMobileNavOpen}
					isMobileNavOpen={isMobileNavOpen}
				/>
			)}
		</header>
	)
}

export default MobileHeader
