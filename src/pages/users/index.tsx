import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Text, Td, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {

    const isWideVersion = useBreakpointValue ({
        base: false,
        lg: true,
    })

    useEffect(() => {
        fetch('http://localhost:3000/api/users')
          .then(response => response.json())
          .then(data => console.log(data))
    },[])

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" bg="gray.800" borderRadius={8} p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading>Usuários</Heading>

                        <Link href="/users/create" passHref>
                            <Button 
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={ <Icon as={RiAddLine} fontSize="20"/> }
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>


                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                                <Th>Usuário</Th>
                                { isWideVersion && <Th>Data de Cadastro</Th>}
                               
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Luiz Henrique</Text>
                                        <Text fontSize="small" color="gray.300">luizhjramos@outlook.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>09 de abril de 2000</Td>}
                                
                            </Tr>
                        </Tbody>
                    </Table>
                    

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}