import NextTopLoader from 'nextjs-toploader';

type Props = {
	readonly children: React.ReactNode;
};

const AppWrapper = (props: Props) => {
	return (
		<html lang="en">
			<body suppressHydrationWarning>
				<NextTopLoader
					color="rgb(34 197 94)"
					initialPosition={0.08}
					crawlSpeed={200}
					height={3}
					crawl
					showSpinner
					easing="ease"
					speed={200}
					shadow="0 0 10px rgb(34 197 94), 0 0 5px rgb(34 197 94)"
				/>
				{props.children}
			</body>
		</html>
	);
};

export default AppWrapper;
