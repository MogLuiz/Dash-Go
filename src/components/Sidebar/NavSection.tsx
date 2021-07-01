import { Box, Stack, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { RiContactsLine, RiDashboardLine } from 'react-icons/ri'


interface INavSectionProps {
    title: string;
    children: ReactNode; // O tipo ReactNode Aceita tudo o que eu posso colocar dentro de uma tag React
}

export function NavSection({ title, children }:  INavSectionProps) {
    return (
        <Box>
            <Text fontWeight="bold" color="gray.400" fontSize="small">GERAL</Text>
            <Stack spacing="4" mt="8" align="stretch">
                {children}
            </Stack>
        </Box>
    )
}