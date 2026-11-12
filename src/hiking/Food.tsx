import { IconChevronRight } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

import { useHikingFood } from './queries'

export const Food = () => {
	const { data: food, isLoading } = useHikingFood()

	return (
		<div>
			<div className="mb-3 flex items-center gap-1 text-lg text-neutral-600">
				<Link to="/writing" className="hover:text-accent-700 hover:underline">
					Writing
				</Link>
				<IconChevronRight size={18} />
				<Link to="." className="hover:text-accent-700 hover:underline">
					Food
				</Link>
			</div>
			<h1 className="page-title">My trail food</h1>
			<div className="wide mt-6 block grid-cols-3 gap-4 space-y-4 md:grid md:space-y-0">
				{!isLoading
					? // eslint-disable-next-line @typescript-eslint/no-explicit-any
						Object.values(food).map((foodItem: any, index) => (
							<div
								className="rounded-lg border border-neutral-300 bg-white px-6 py-4"
								key={index}
							>
								<img
									src={foodItem.Photo?.[0].url}
									alt=""
									className="h-[132px]"
								/>
								<h2 className="font-heading my-2 text-lg font-bold">
									{foodItem.Name}
								</h2>
								<p>{foodItem.Notes}</p>
							</div>
						))
					: Array.from({ length: 3 }, (_, i) => (
							<div
								key={i}
								className="h-[140px] w-full animate-pulse rounded-md bg-neutral-300"
							/>
						))}
			</div>
		</div>
	)
}
