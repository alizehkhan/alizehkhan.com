import { Helmet } from 'react-helmet-async'
import { Navigate, Route, Routes } from 'react-router-dom'

import { components } from '../components/MDXComponents'
import Email from './email-setup.mdx'
import Unlearn from './minimalism.mdx'

export const Minimalism = () => {
	return (
		<>
			<Helmet>
				<title>Writing | Alizeh Khan</title>
			</Helmet>

			<Routes>
				<Route path="/" element={<Navigate to="/writing" replace />} />
				<Route path="/email" element={<Email components={components} />} />
				<Route path="/unlearn" element={<Unlearn components={components} />} />
			</Routes>
		</>
	)
}
