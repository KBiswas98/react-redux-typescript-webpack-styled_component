import React, { ReactElement } from 'react'

interface Props {
	page?: string;
	children?: any;
}

export default function Navbar({ page, children }: Props): ReactElement {
	return (
		<section className="flex justify-between bg-color1-background">
			<p> goto home </p>
			<section className="body-child-content ">{children}</section>
		</section>
	)
}
