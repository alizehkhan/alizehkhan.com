export const Footer = () => (
	<footer className="container mt-16 mb-6">
		<div className="rule" />
		<div className="flex flex-col justify-between gap-4 py-8 sm:flex-row sm:items-baseline">
			<p className="font-heading text-xl leading-none font-bold">
				🌳 Alizeh Khan
			</p>

			<div className="flex gap-5 text-lg">
				<a href="/alizeh-khan-resume.pdf" className="inline-link">
					Résumé
				</a>
				<a href="https://linkedin.com/in/alizehkhan" className="inline-link">
					LinkedIn
				</a>
				<a href="https://github.com/alizehkhan" className="inline-link">
					Github
				</a>
			</div>
		</div>
	</footer>
)
