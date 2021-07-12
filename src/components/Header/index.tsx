import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {

  const { onOpen } = useSidebarDrawer()

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

           { !isWideVersion && (
             <IconButton 
               aria-label="Open navigation" //Propriedade de acessibilidade que fala o que o button faz
               icon={<Icon as={RiMenuLine} />}
               fontSize="24"
               variant="unstyled"
               onClick={onOpen}
               mr="2"
             />           
           )}
            
            <Logo />

            { isWideVersion && <SearchBox /> }
       
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