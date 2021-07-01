import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface IProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: IProfileProps) {
    return (
        <Flex align="center">
              
              { showProfileData && ( // se for verdadeiro vai renderizar
                <Box mr="4" textAlign="right">
                  <Text>Luiz Henrique</Text>
                  <Text 
                    color="gray.300" 
                    fontSize="small"
                >
                    luizhjramos@outlook.com
                  </Text>
                </Box>
              )}

            <Avatar size="md" name="Luiz Henrique" src="https://github.com/MogLuiz.png"/>

        </Flex>
    )
}