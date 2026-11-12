export const Quote = ({
	children,
	author,
}: {
	children: string
	author?: string
}) => {
	return (
		<div className="my-10">
			<blockquote className="border-accent-600/60 border-l-4 pl-6">
				<q className="text-[1.3em] leading-[1.45] font-medium italic">
					{children}
				</q>
				{author && (
					<cite className="mt-3 block text-[0.85em] text-neutral-600 not-italic">
						{author}
					</cite>
				)}
			</blockquote>
		</div>
	)
}
