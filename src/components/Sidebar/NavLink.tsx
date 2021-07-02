import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import React, { ElementType } from "react";

import { ActiveLink } from '../ActiveLink'


interface INavLinkProps extends ChakraLinkProps {
    icon: ElementType; //Quando eu passo a referencia de um componente ou seja o nome dele 
    children: string;
    href: string;
}

export function NavLink({ icon, children, href, ...rest }: INavLinkProps ) {
    return(
        <ActiveLink href={href} passHref>
            <ChakraLink display="flex" align="center" {...rest}>
                <Icon as={icon} fontSize="20"/>
                <Text ml="4" fontWeight="medium">{children}</Text>
            </ChakraLink>
        </ActiveLink>
 )
}