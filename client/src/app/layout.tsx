'use client'

import { StrictMode } from 'react'
import React from 'react';
import { usePathname } from 'next/navigation';

// auth
import { AuthContextProvider } from '@/context/AuthContext';

// styles
import '@/styles/index.css'

// components
import { Grid, Col } from '@/components/ui/Grid';
import Nav from '@/components/Nav';
import Scene from '@/components/Scene';
import Scenario from '@/components/Scenario';

// fontawesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const pathname = usePathname();
	const routeConfig = ['/', '/work', '/human', '/contact', '/login', '/signup'];
	const hasScenario = routeConfig.includes(pathname);

	return (
		<AuthContextProvider>
			<html lang="en">
				<head>
					<title>.broken - portfolio</title>
					<meta name='description' content='developed by .noah' />
				</head>
				<body className='container display-f'>

					<StrictMode>
						<Nav />
						
						<Grid className='w-full'>
							{hasScenario ? (
								<>
									<Col col='2' extraLMargin className='z-2 overflow-h'>
										<Scenario />
									</Col>
								</>
							) : null}
							<Col col={hasScenario ? '10' : '12'} extraLMargin className='overflow-h'>
								<Scene className='overflow-s'>
									{children}
								</Scene>
							</Col>
						</Grid>
					</StrictMode>

				</body>
			</html>
		</AuthContextProvider>
	)
}
