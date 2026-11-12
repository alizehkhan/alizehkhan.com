import { Helmet } from 'react-helmet-async'

export const Home = () => {
	return (
		<>
			<Helmet>
				<title>
					Alizeh Khan | Frontend engineer moving into engineering management
				</title>
			</Helmet>

			<div>
				<div>
					<h1 className="home-lead">
						I build teams and systems for web experiences that prioritise
						content, inclusivity, and simplicity.
					</h1>
					<p>
						A senior frontend engineer moving into{' '}
						<span className="marker-word">engineering management</span>.
					</p>
					<p className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
						<a className="inline-link font-bold" href="/alizeh-khan-resume.pdf">
							Résumé (PDF)
						</a>
						<a
							className="inline-link font-bold"
							href="https://linkedin.com/in/alizehkhan"
						>
							LinkedIn
						</a>
					</p>
				</div>
				<img
					src="/assets/alizeh-portrait.jpg"
					className="mt-14 aspect-square w-full max-w-64 rounded-full object-cover object-[50%_22%]"
					alt="Alizeh smiling, leaning on a teal cushion in front of a wooden wall"
				/>
			</div>
		</>
	)
}
