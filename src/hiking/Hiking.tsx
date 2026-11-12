import { Helmet } from 'react-helmet-async'
import { Navigate, Route, Routes } from 'react-router-dom'

import { components } from '../components/MDXComponents'
import { Food } from './Food'
import { GearList } from './GearList'
import Planning from './planning.mdx'

export const Hiking = () => {
	return (
		<>
			<Helmet>
				<title>Writing | Alizeh Khan</title>
			</Helmet>

			<Routes>
				<Route path="/" element={<Navigate to="/writing" replace />} />
				<Route path="/gear/*" element={<GearList />} />
				<Route path="/food" element={<Food />} />
				<Route
					path="/planning"
					element={<Planning components={components} />}
				/>
			</Routes>
		</>
	)
}
