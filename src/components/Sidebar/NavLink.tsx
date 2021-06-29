import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";


interface INavLinkProps extends ChakraLinkProps {
    icon: ElementType; //Quando eu passo a referencia de um componente ou seja o nome dele 
    children: string;
}

export function NavLink({ icon, children, ...rest }: INavLinkProps ) {
    return(
        <Link display="flex" align="center" {...rest}>
            <Icon as={icon} fontSize="20"/>
            <Text ml="4" fontWeight="medium">{children}</Text>
        </Link>
 )
}