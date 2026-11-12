import { Helmet } from 'react-helmet-async'

export const Home = () => {
	return (
		<>
			<Helmet>
				<title>
					Alizeh Khan | Frontend engineer moving into engineering management
				</title>
			</Helmet>

			<h1 className="home-lead">
				I build teams and systems for web experiences that prioritise content,
				inclusivity, and simplicity.
			</h1>
			<p>
				A senior frontend engineer moving into{' '}
				<span className="marker-word">engineering management</span>.
			</p>
		</>
	)
}
