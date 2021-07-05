import { Flex, Button, Stack } from '@chakra-ui/react'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Input } from '../components/Form/Input'



type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {

  const { register, handleSubmit, formState } = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = (values, event) => {
    console.log(values)
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      alignItems="center" 
      justifyContent="center"
    >
      <Flex 
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">

          <Input 
            name="email" 
            type="email" 
            label="E-mail" 
            {...register('name', { required: false })} />

          <Input name="password" type="password" label="Senha" {...register('email', { required: false })} />

        </Stack>

        <Button type="submit" marginTop="6" colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}
