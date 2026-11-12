import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

import { Code } from './Code'

export const components = {
	h1: ({ children }: { children?: ReactNode }) => (
		<h1 className="page-title">{children}</h1>
	),
	h2: ({ children }: { children?: ReactNode }) => (
		<h2 className="font-heading mt-16 mb-4 text-[1.75rem] leading-[1.15] font-bold tracking-[-0.01em] text-neutral-700 md:text-[2.25rem]">
			{children}
		</h2>
	),
	h3: ({ children }: { children?: ReactNode }) => (
		<h3 className="font-heading mt-12 mb-3 text-[1.5rem] leading-[1.3] font-bold text-neutral-700 md:text-[1.625rem]">
			{children}
		</h3>
	),
	p: ({ children }: { children?: ReactNode }) => (
		<p className="my-[0.9em] text-neutral-700">{children}</p>
	),
	a: ({
		children,
		href,
	}: DetailedHTMLProps<
		AnchorHTMLAttributes<HTMLAnchorElement>,
		HTMLAnchorElement
	>) => (
		<a href={href} className="inline-link">
			{children}
		</a>
	),
	li: ({ children }: { children?: ReactNode }) => (
		<li className="my-[0.4em] pl-1 text-neutral-700 marker:text-neutral-500">
			{children}
		</li>
	),
	ul: ({ children }: { children?: ReactNode }) => (
		<ul className="my-[0.9em] list-disc pl-[1.4em]">{children}</ul>
	),
	ol: ({ children }: { children?: ReactNode }) => (
		<ol className="my-[0.9em] list-decimal pl-[1.6em]">{children}</ol>
	),
	code: ({ children }: { children?: ReactNode }) => (
		<code className="bg-grey-100 text-accent-700 rounded px-1.5 py-0.5 font-mono text-[0.8em]">
			{children}
		</code>
	),
	pre: ({ children }: { children?: ReactNode }) => <Code>{children}</Code>,
	hr: () => <hr className="rule my-10" />,
}
