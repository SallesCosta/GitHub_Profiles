/* eslint-disable react-hooks/exhaustive-deps */
import localforage from 'localforage'
import {
  useEffect,
  useState,
  createContext,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react'
import { useNavigate } from 'react-router-dom'

type ContextValue = {
  erro: boolean;
  setErro: Dispatch<SetStateAction<boolean>>;
  setUserData: Dispatch<SetStateAction<any>>;
  activePage: number;
  backToSearch: () => void;
  userData: any;
  userRepos: any;
  getReposData: (page: number) => void;
  setInputData: Dispatch<SetStateAction<string>>;
  inputData: string;
  getUser: (data: any) => void;
  totalArredondado: number;
};

type ContextProps = {
  children: ReactNode | ReactNode[];
};

const DataContext = createContext<ContextValue | null>(null)

export function ContextProvider ({ children }: ContextProps) {
  const [userData, setUserData] = useState<any>(null)
  const [userRepos, setUserRepos] = useState(null)
  const [erro, setErro] = useState(false)
  const [activePage, setActivePage] = useState(1)
  const [inputData, setInputData] = useState('')
  const [totalArredondado, setTotalArredondado] = useState<number>()

  const backToSearch = () => {
    setUserData(null)
    setUserRepos(null)
    setErro(false)
    navigate('/')
  }

  type SaveInCache = {
    key: string;
    data: unknown;
  };

  type YupDataScheema = {
    user: string;
  };

  const navigate = useNavigate()
  const get = (url: string) => {
    return fetch(url)
  }

  const getDataFromCache = async (user: string): Promise<unknown> => {
    return localforage.getItem(`github-user-${user}`)
  }

  const saveInCache = async ({ key, data }: SaveInCache): Promise<void> => {
    await localforage.setItem(`github-user-${key}`, data)
  }

  const getUsersFromGithub = async (user: string): Promise<unknown> => {
    const userUrl = `https://api.github.com/users/${user}`

    return get(userUrl)
      .then((res) => {
        if (res.ok) return res.json()
        return Promise.reject(new Error('erro na requisição'))
      })
      .catch(() => setErro(true))
  }

  const getUser = async (user: YupDataScheema) => {
    const userString = user.user
    const cache = await getDataFromCache(userString)
    if (cache) {
      setUserData(cache)
      return cache
    }
    const data = await getUsersFromGithub(userString)

    await saveInCache({ key: userString, data })
    setUserData(data)
    return data
  }

  function getReposData (page = 1) {
    if (!userData) {
      return
    }

    setTotalArredondado(Math.ceil(userData.public_repos / 9))
    const toRepo = `${userData.repos_url}?per_page=9&page=${page}`
    get(toRepo)
      .then((res: any) => res.json())
      .then((json: any) => setUserRepos(json))
    setActivePage(page)
  }

  useEffect(() => {
    getReposData()
  }, [userData])

  useEffect(() => {
    navigate(userRepos === null ? '/' : '/user')
  }, [navigate, userRepos])

  return (
    <DataContext.Provider
      value={{
        erro,
        setErro,
        setUserData,
        activePage,
        backToSearch,
        userData,
        userRepos,
        getReposData,
        setInputData,
        inputData,
        getUser,
        totalArredondado,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export function useGlobalContext () {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error(
      'You must wrap your app with <ContextProvider /> component',
    )
  }
  return context
}
