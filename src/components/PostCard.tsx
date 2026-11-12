import { format } from 'date-fns'
import { Link } from 'react-router-dom'

import { Post } from '../utils/types'
import { showDate } from '../utils/utils'

export const PostCard = ({ link, image, title, description, date }: Post) => {
	return (
		<article>
			<Link
				to={link}
				className="group flex items-start gap-8 py-10 md:gap-12 md:py-12"
			>
				<div className="min-w-0 flex-1">
					{date && (
						<p
							title={`${format(date, 'MMM d, yyyy')}`}
							className="mb-2 text-[0.8em] tracking-[0.01em] text-neutral-600"
						>
							{showDate(date)}
						</p>
					)}
					<p className="font-heading text-[1.5rem] leading-[1.2] font-bold md:text-[1.875rem]">
						<span className="highlight">{title}</span>
					</p>
					<p className="mt-3 text-[0.92em] leading-[1.6] text-neutral-600">
						{description}
					</p>
				</div>
				<img
					className="hidden h-28 w-40 shrink-0 object-contain opacity-85 md:block"
					src={image}
					alt=""
				/>
			</Link>
		</article>
	)
}
