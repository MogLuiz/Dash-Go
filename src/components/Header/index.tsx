import { Flex } from '@chakra-ui/react'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
    return (
        <Flex 
          as="header"
          w="100%"
          maxWidth={1400}
          h="20"
          marginX="auto"
          marginTop="4"
          align="center"
          px="6"
        >
            
            <Logo />

            <SearchBox />
       
            <Flex
              align="center"
              marginLeft="auto"
            >

              <NotificationsNav />

              <Profile />

            </Flex>
       
        </Flex>
    )
}