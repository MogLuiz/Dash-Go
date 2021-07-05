import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage } from "@chakra-ui/react";
import { FieldError } from 'react-hook-form'
import React, { forwardRef, ForwardRefRenderFunction } from "react";

interface IInputProps extends ChakraInputProps{
    name: string;
    label?: string;
    error: FieldError;
}


const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = ({ name, label, error = null, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error} >
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

            <ChakraInput
              name={name} 
              id={name}
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor :'gray.900'
              }}
              size="lg"
              ref={ref}
              {...rest}
            />

              { !!error && (
                <FormErrorMessage>
                  <span role="alert">
                    Campo obrigatório
                  </span>
                </FormErrorMessage>
              )}

        </FormControl>
    )
}

export const Input = forwardRef(InputBase)