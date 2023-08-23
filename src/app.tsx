import { ErrorBoundary } from 'react-error-boundary'
import { ErrorBoundaryPage } from './pages/errorBoundary/errorBoundary'
import { Routes, Route } from 'react-router-dom'
import { SearchPage } from './pages/searchPage/searchPage'
import { UserPage } from './pages/userPage/userPage'
import { Text, Center, useColorMode, Switch } from '@chakra-ui/react'
import { Header, DarkModeControl, Title, Label } from './ui/styles'
import { useGlobalContext } from './helpers/contextGlobal'

export function App () {
  const { colorMode, toggleColorMode } = useColorMode()
  const { erro } = useGlobalContext()

  return (
    <>
      <Header>
        <Title>GitHub profiles</Title>
        <DarkModeControl>
          <Label>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Label>
          <Switch onChange={toggleColorMode} />
        </DarkModeControl>
      </Header>
      {erro && (
        <Center>
          <Text fontWeight='Bold' color='tomato'>
            not found, try an other
          </Text>
        </Center>
      )}
      <Routes>
        <Route path='/' element={<SearchPage />} />
        <Route
          path='user'
          element={
            <ErrorBoundary FallbackComponent={ErrorBoundaryPage}>
              <UserPage />
            </ErrorBoundary>
          }
        />
      </Routes>
    </>
  )
}
