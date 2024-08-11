import React, { type CSSProperties } from 'react';
import icons from '../../assets/icons';

type Props = {
	readonly name: keyof typeof icons;
	readonly className?: string;
	readonly style?: CSSProperties;
	readonly onClick?: VoidFunction;
};

export const UISvg = (props: Props) => {
	const clickHandler = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();

		props.onClick!();
	};

	return (
		<svg
			style={props.style}
			className={props.className}
			version="1.1"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox={'0 0 ' + icons[props.name][0]}
			dangerouslySetInnerHTML={{ __html: icons[props.name][1] ?? '' }}
			onClick={props.onClick && clickHandler}
		/>
	);
};
