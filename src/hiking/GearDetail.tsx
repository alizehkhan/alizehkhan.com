import { IconChevronRight, IconScale } from '@tabler/icons-react'
import ReactMarkdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom'

import { getKebabCase } from '../utils/utils'
import { useHikingGear } from './queries'

export const GearDetail = () => {
	const { gearId } = useParams()
	const { data: hikingGear } = useHikingGear()
	// @ts-expect-error too lazy
	const gearItem = hikingGear && gearId ? hikingGear[gearId] : null

	return (
		<>
			<div className="mb-3 flex items-center gap-2 text-lg text-neutral-600">
				<Link to="/writing" className="hover:text-accent-700 hover:underline">
					Writing
				</Link>
				<IconChevronRight size={16} />
				<Link
					to="/hiking/gear"
					className="hover:text-accent-700 hover:underline"
				>
					Gear
				</Link>
				<IconChevronRight size={16} />
				<Link to="." className="hover:text-accent-700 hover:underline">
					{gearItem?.Name}
				</Link>
			</div>
			<div className="wide mt-8 flex flex-col gap-4 md:flex-row">
				<div className="mr-8 shrink-0">
					<div className="mb-4 rounded-lg border border-neutral-300 bg-white p-3 shadow-xs">
						<p
							className={`mr-auto inline-block w-fit rounded-full px-3 py-1 text-xs font-bold ${
								gearItem ? getKebabCase(gearItem.Category) : ''
							}`}
						>
							{gearItem?.Category}
						</p>
						<img
							src={gearItem?.Photo[0].url}
							alt=""
							className="mt-1 h-[190px] w-full object-contain"
						/>
						<p className="font-heading text-lg font-bold">{gearItem?.Brand}</p>
						<p className="mb-4">{gearItem?.Product}</p>
						<div className="flex items-center text-lg font-bold">
							{gearItem?.Weight && (
								<div
									title="Total weight"
									className="mr-6 flex items-center justify-between"
								>
									<IconScale
										size={20}
										color="#8f7b68"
										style={{ marginRight: '8px' }}
									/>
									<p>{Math.round(gearItem.Weight)} g</p>
								</div>
							)}
						</div>
					</div>
				</div>
				<div>
					<h1 className="font-heading mb-4 flex items-center gap-2 text-3xl font-bold">
						{gearItem?.Name}
						{gearItem?.Condition === 'New' && (
							<span className="rounded-full bg-yellow-300 px-3 py-1 text-sm text-yellow-700 shadow-xs">
								✨ New
							</span>
						)}
					</h1>
					<ReactMarkdown className="[&_a]:text-accent-700 max-w-[70ch] text-xl [&_a]:underline [&_li]:ml-8 [&_li]:list-disc [&_p]:mb-4 [&_ul]:mb-4">
						{gearItem?.Notes}
					</ReactMarkdown>
				</div>
			</div>
		</>
	)
}
