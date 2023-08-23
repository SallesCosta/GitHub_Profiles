import {
  Tooltip,
  Text,
  Heading,
  Box,
  Input,
  Container,
  Flex,
  HStack,
  Center,
  VStack,
  useToast,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { CopyIcon } from '@chakra-ui/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button } from '@/ui/styles'
import { theme } from '@/ui/theme'
import { useGlobalContext } from '@/helpers/contextGlobal'

const sugs = ['fdaciuk', 'gaearon', 'ashulin', 'craftzdog', 'benfrain']

export const SearchPage = () => {
  const { getUser } = useGlobalContext()
  const toast = useToast()

  const sugsOne = ['k', 'x', 'f']

  const schema = yup
    .object({
      user: yup.string().required(),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  return (
    <Container h='93vh'>
      <form onSubmit={handleSubmit(getUser)}>
        <Flex mt='20px'>
          <Input
            color={theme.colors.gray_600}
            bg={theme.colors.white}
            _placeholder={{ color: `${theme.colors.gray_600}` }}
            mr='10px'
            placeholder='user name...'
            type='search'
            {...register('user', { required: true })}
          />
          <Button id='submit' primary>
            Send
          </Button>
        </Flex>
      </form>
      <Center>
        {errors.user?.message && (
          <Text fontWeight='Bold' color='tomato'>
            user is a required field
          </Text>
        )}
      </Center>
      <Box mt='30px'>
        <VStack>
          <Heading color='gray.600' fontSize='1.3rem '>
            Sugestions to try
          </Heading>
          {sugs.map((i, index) => (
            <HStack key={index}>
              <CopyToClipboard text={i}>
                <Button
                  id={i}
                  onClick={() =>
                    toast({
                      title: `Copied ${i}`,
                      variant: 'subtle',
                      isClosable: true,
                    })}
                >
                  <HStack>
                    <Text>{i}</Text>
                    <CopyIcon w={3} h={3} />
                  </HStack>
                </Button>
              </CopyToClipboard>
            </HStack>
          ))}
          {sugsOne.map((i, index) => (
            <Tooltip placement='right' key={index} label='Wow, length = 1!'>
              <HStack>
                <CopyToClipboard text={i}>
                  <Button
                    id={i}
                    onClick={() =>
                      toast({
                        title: `Copied ${i}`,
                        variant: 'subtle',
                        isClosable: true,
                      })}
                  >
                    <HStack>
                      <Text>{i}</Text>
                      <CopyIcon w={3} h={3} />
                    </HStack>
                  </Button>
                </CopyToClipboard>
              </HStack>
            </Tooltip>
          ))}
        </VStack>
      </Box>
    </Container>
  )
}
