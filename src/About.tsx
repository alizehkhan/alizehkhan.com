import { Helmet } from 'react-helmet-async'

export const About = () => (
	<>
		<Helmet>
			<title>About | Alizeh Khan</title>
		</Helmet>
		<h1 className="page-title">About</h1>
		<div className="flex flex-col lg:grid lg:grid-cols-[1fr_16rem] lg:items-start lg:gap-16">
			<img
				src="/assets/alizeh-portrait.jpg"
				className="mb-10 aspect-square w-full max-w-64 rounded-full object-cover lg:order-last lg:mb-0"
				alt="Alizeh smiling, leaning on a teal cushion in front of a wooden wall"
			/>
			<div className="space-y-6 text-[1.15em]">
				<p>
					Focused on Design Systems, Accessibility, and form UX. I build and
					advocate for web experiences that prioritise simplicity.
				</p>
				<p>
					I focus on nailing the “boring” basics over chasing novelty because
					products should serve the user, not cure a designer’s boredom.
				</p>
			</div>
		</div>
	</>
)
