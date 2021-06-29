import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
    return (
        <Flex align="center">
              <Box mr="4" textAlign="right">
                    <Text>Luiz Henrique</Text>
                    <Text 
                      color="gray.300" 
                      fontSize="small"
                    >
                      luizhjramos@outlook.com
                    </Text>
              </Box>

            <Avatar size="md" name="Luiz Henrique" src="https://github.com/MogLuiz.png"/>

        </Flex>
    )
}