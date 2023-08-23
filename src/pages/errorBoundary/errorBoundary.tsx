import { useGlobalContext } from '@/helpers/contextGlobal'
import { theme } from '@/ui/theme'
import { Heading, Flex, Button } from '@chakra-ui/react'

export const ErrorBoundaryPage = () => {
  const { backToSearch } = useGlobalContext()

  return (
    <Flex h='100vh' justifyContent='center' alignItems='center'>
      <Flex direction='column' padding={8} rounded={6} bg='gray.100'>
        <Heading mb={6} color='gray.600'>
          Something went wrong.
        </Heading>
        <Button bg={theme.colors.ls} color='gray.600' onClick={backToSearch}>
          Back to searchPage
        </Button>
      </Flex>
    </Flex>
  )
}
