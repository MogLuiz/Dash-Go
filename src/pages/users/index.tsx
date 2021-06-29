import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Text, Td } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" bg="gray.800" borderRadius={8} p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading>Usuários</Heading>

                        <Button 
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="pink"
                          leftIcon={ <Icon as={RiAddLine} fontSize="20"/> }
                        >
                            Criar novo
                        </Button>
                    </Flex>


                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de Cadastro</Th>
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Luiz Henrique</Text>
                                        <Text fontSize="small" color="gray.300">luizhjramos@outlook.com</Text>
                                    </Box>
                                </Td>
                                <Td>09 de abril de 2000</Td>
                                <Td>
                                <Button 
                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="pink"
                                    leftIcon={ <Icon as={RiPencilLine} fontSize="16"/>}
                                >
                                  Editar
                                </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </Flex>
        </Box>
    )
}