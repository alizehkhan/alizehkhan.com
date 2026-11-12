import { Helmet } from 'react-helmet-async'

import { PostCard } from '../components/PostCard'
import { ALL_POSTS } from './posts'

export const Writing = () => (
	<>
		<Helmet>
			<title>Writing | Alizeh Khan</title>
		</Helmet>
		<h1 className="page-title">Writing</h1>
		<div className="divided">
			{ALL_POSTS.map((post) => (
				<PostCard key={post.link.toString()} {...post} />
			))}
		</div>
	</>
)
