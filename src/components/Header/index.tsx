import { Flex, useBreakpointValue } from '@chakra-ui/react'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {

  const isWideVersion = useBreakpointValue({
    base: false, 
    lg: true // Estará visivel apenas quando passar do tamanho lg
  })
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

              <Profile showProfileData={isWideVersion}/>

            </Flex>
       
        </Flex>
    )
}