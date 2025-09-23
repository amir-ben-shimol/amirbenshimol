import type { MDXComponents } from 'mdx/types';
import { oneLight, oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useTheme } from 'next-themes';

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
	const { theme } = useTheme();

	return {
		p: ({ children }) => <p className="mb-5 text-lg leading-7 text-gray-700 dark:text-gray-300">{children}</p>,
		img: ({ src, alt }) => <img className="my-8 h-auto max-w-full rounded-lg shadow-lg" src={src} alt={alt || 'Blog image'} />,
		code: ({ children, className }) => {
			const match = /language-(\w+)/.exec(className || '');

			return match ? (
				<div className="my-8">
					<SyntaxHighlighter style={theme === 'dark' ? oneDark : oneLight} PreTag="div" language={match[1]} className="rounded-lg shadow-sm">
						{String(children).replace(/\n$/, '')}
					</SyntaxHighlighter>
				</div>
			) : (
				<code className="rounded bg-gray-100 px-2 py-1 font-mono text-sm text-red-600 dark:bg-gray-800 dark:text-red-400">{children}</code>
			);
		},

		h1: ({ children }) => <h1 className="mb-8 mt-12 text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl">{children}</h1>,
		h2: ({ children }) => <h2 className="mb-6 mt-12 text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-4xl">{children}</h2>,
		h3: ({ children }) => <h3 className="mb-5 mt-10 text-2xl font-semibold leading-tight text-gray-900 dark:text-white md:text-3xl">{children}</h3>,
		h4: ({ children }) => <h4 className="mb-4 mt-8 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:text-2xl">{children}</h4>,
		h5: ({ children }) => <h5 className="mb-3 mt-6 text-lg font-semibold leading-tight text-gray-900 dark:text-white md:text-xl">{children}</h5>,

		ul: ({ children }) => <ul className="mb-5 list-disc space-y-1 pl-6 text-lg leading-7 text-gray-700 dark:text-gray-300">{children}</ul>,
		ol: ({ children }) => <ol className="mb-5 list-decimal space-y-1 pl-6 text-lg leading-7 text-gray-700 dark:text-gray-300">{children}</ol>,
		li: ({ children }) => <li className="leading-7">{children}</li>,

		blockquote: ({ children }) => (
			<blockquote className="my-6 border-l-4 border-blue-500 bg-blue-50 py-4 pl-6 pr-4 text-lg italic leading-7 text-gray-700 dark:bg-blue-900/20 dark:text-gray-300">
				{children}
			</blockquote>
		),

		a: ({ children, href }) => (
			<a
				href={href}
				className="font-medium text-blue-600 underline underline-offset-2 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
				target={href?.startsWith('http') ? '_blank' : undefined}
				rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
			>
				{children}
			</a>
		),

		strong: ({ children }) => <strong className="font-bold text-gray-900 dark:text-white">{children}</strong>,

		em: ({ children }) => <em className="italic text-gray-800 dark:text-gray-200">{children}</em>,

		...components,
	};
};
