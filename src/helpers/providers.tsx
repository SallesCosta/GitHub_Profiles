import { ContextProvider } from './contextGlobal'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { ReactNode } from 'react'

const config = {
  initialColorMode: 'light',
}

const styles = {
  global: {
    '.root': {
      minHeight: '100vh',
    },
  },
}

const ctheme = extendTheme({ config, styles })

type Props = {
  children: ReactNode | ReactNode[];
};

type Provider = {
  provider: (props: any) => JSX.Element | null;
  props?: unknown;
};
const providers: Provider[] = [
  { provider: BrowserRouter },
  {
    provider: ChakraProvider,
    props: {
      resetCSS: true,
      ctheme,
    },
  },
  { provider: ContextProvider },
]

export const Providers = ({ children }: Props) => {
  return (
    <>
      {providers.reduceRight((child, component) => {
        const allProps = Object.assign({}, component.props)
        return <component.provider allProps>{child}</component.provider>
      }, children)}
    </>
  )
}
