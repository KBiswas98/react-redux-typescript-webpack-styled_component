import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface Props {}

export default function Client({}: Props): ReactElement {
	return (
		<div>
			Client view
			<ProImage src="https://picsum.photos/200" />
		</div>
	)
}

const ProImage = styled.img`
	height: 50px;
	width: 50px;
	border-radius: 5px;
	margin: 10px;
`
