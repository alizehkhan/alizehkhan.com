import { Post } from '../utils/types'

export const POSTS: Post[] = [
	{
		title: 'Component API design principles',
		description:
			'Component APIs are the interface between the design system and its consumers. A well-designed API should be intuitive, predictable, and flexible.',
		image: '/illustrations/api.svg',
		link: '/frontend-design/api-design',
		date: new Date(2025, 7, 30),
	},
	{
		title: 'What is a tooltip and how to use it accessibly',
		description:
			'Tooltips, popovers, modals, dialogs... What is the semantic difference in all these pop up thingies. Lets start with the tooltip.',
		image: '/illustrations/tooltip.svg',
		link: '/frontend-design/tooltips',
		date: new Date(2025, 6, 30),
	},
	{
		title: 'How to get instant feedback on your design system',
		description:
			'Free, unfiltered, instant, quantitative and qualitative feedback without surveys or workshops...',
		image: '/illustrations/feedback.svg',
		link: '/frontend-design/design-system-feedback',
		date: new Date(2024, 4, 8),
	},
	{
		title: 'Manual accessibility testing',
		description:
			'Manual checks I do using the keyboard, screen reader and accessibility tree to test my website for accessibility.',
		image: '/illustrations/manual.svg',
		link: '/frontend-design/manual-accessibility-testing',
		date: new Date(2023, 8, 3),
	},
	{
		title: 'Automated accessibility testing',
		description:
			'How I leverage tooling and automated tests in my workflow to help build accessible experiences efficiently.',
		image: '/illustrations/automated.svg',
		link: '/frontend-design/automated-accessibility-testing',
		date: new Date(2023, 5, 11),
	},
	{
		title: 'My ruthlessly simple email setup',
		description:
			'If you are into high maintenance productivity systems like bullet journalling, look away! Here is my dead simple approach to managing emails.',
		image: '/illustrations/email.svg',
		link: '/minimalism/email',
	},
	{
		title: 'Minimalism helped me unlearn',
		description:
			'A lot of people think minimalism is focused on the number of things you own and picture it in its most extreme form. Lets debunk some myths.',
		image: '/illustrations/minimalism.svg',
		link: '/minimalism/unlearn',
	},
	{
		title: 'How I plan a hike',
		description:
			'Planning a long distance hike can appear intimidating but its a very structured process! Here is the checklist I follow when planning a hike.',
		image: '/illustrations/plan-hike.svg',
		link: '/hiking/planning',
	},
	{
		title: 'My hiking gear',
		description:
			'Guidance and list of my solo long-distance hiking gear which I religiously keep up to date.',
		image: '/illustrations/tent.svg',
		link: '/hiking/gear',
	},
	{
		title: 'My trail food',
		description:
			'A breakdown of the food I tend to eat on trail and what I think about when resupplying on a long distance hike.',
		image: '/illustrations/food.svg',
		link: '/hiking/food',
	},
]

const byNewest = (a: Post, b: Post) =>
	(b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0)

export const ALL_POSTS = [...POSTS].sort(byNewest)
