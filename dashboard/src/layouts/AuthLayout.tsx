import {
	Box,
	Flex,
	Image,
	Text,
	Spinner,
	useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'urql';
import { MetaQuery } from '../graphql/queries';

export function AuthLayout({ children }: { children: React.ReactNode }) {
	const [{ fetching, data }] = useQuery({ query: MetaQuery });
	const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');
	return (
		<Flex
			h="100vh"
			bg="blackAlpha.900"
			alignItems="center"
			justifyContent="center"
			direction={['column', 'column']}
			padding={['2%', '2%', '2%', '2%']}
		>
			<Flex alignItems="center" maxW="100%">
				<Image
					src="https://avatars.githubusercontent.com/u/47073516?v=4"
					rounded={'full'}
					alt="logo"
					height="50"
				/>
				<Text fontSize="x-large" ml="3" color={"whiteAlpha.900"} letterSpacing="3">
					Dhananjay
				</Text>
			</Flex>

			{fetching ? (
				<Spinner />
			) : (
				<>
					<Box
						p="6"
						m="5"
						rounded="5"
						bg="white"
						w={isNotSmallerScreen ? '500px' : '450px'}
						shadow="xl"
						maxW="100%"
					>
						{children}
					</Box>
					<Text color="gray.600" fontSize="sm">
						{/* Current Version: {data.meta.version} */}
						Current Version : Latest
					</Text>
				</>
			)}
		</Flex>
	);
}
