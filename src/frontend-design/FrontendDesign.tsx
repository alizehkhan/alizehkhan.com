import { Helmet } from 'react-helmet-async'
import { Navigate, Route, Routes } from 'react-router-dom'

import { components } from '../components/MDXComponents'
import ApiDesign from './api-design.mdx'
import AutomatedTesting from './automated-testing.mdx'
import DeclutterUi from './declutter-ui.mdx'
import Feedback from './feedback.mdx'
import ManualTesting from './manual-testing.mdx'
import Tooltips from './tooltips.mdx'

const routes = [
	{ path: 'automated-accessibility-testing/', component: AutomatedTesting },
	{ path: 'manual-accessibility-testing/', component: ManualTesting },
	{ path: 'design-system-feedback/', component: Feedback },
	{ path: 'declutter-ui/', component: DeclutterUi },
	{ path: 'tooltips/', component: Tooltips },
	{ path: 'api-design/', component: ApiDesign },
]

export const FrontendDesign = () => {
	return (
		<>
			<Helmet>
				<title>Writing | Alizeh Khan</title>
			</Helmet>
			<Routes>
				{routes.map(({ path, component: Component }) => (
					<Route
						key={path}
						path={path}
						element={<Component components={components} />}
					/>
				))}
				<Route index element={<Navigate to="/writing" replace />} />
			</Routes>
		</>
	)
}
