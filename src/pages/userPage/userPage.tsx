import { ExternalLinkIcon } from '@chakra-ui/icons'
import { AiFillGithub } from 'react-icons/ai'
import { Icon } from '@chakra-ui/react'

import {
  Button,
  Content,
  RepoHeader,
  UserInfos,
  ThisRepo,
  Grid,
  Repo,
  VStack,
  UserSection,
} from '@/ui/styles'
import { Tag } from './components/tag'
import { Pagination } from './components/pagination/pagination'
import { useGlobalContext } from '@/helpers/contextGlobal'

export const UserPage = () => {
  const { backToSearch, userData, userRepos } = useGlobalContext()

  return (
    <Content>
      <UserSection>
        <Button primary onClick={backToSearch} data-testid='back-button'>
          back to Search Page
        </Button>
        <img decoding='async' alt='user avatar' src={userData.avatar_url} />
        <UserInfos>
          <p>Name: {userData.name}</p>
          <p>Total number of repositories: {userData.public_repos}</p>
        </UserInfos>
        <a
          href='https://github.com/SallesCosta/GitHub-Profiles'
          target='_blank'
          rel='noreferrer'
        >
          <ThisRepo>
            <VStack>
              <h3>Does this project deserve a star?</h3>
              <Icon as={AiFillGithub} />
            </VStack>
          </ThisRepo>
        </a>
      </UserSection>

      <VStack>
        <Grid>
          {userRepos.map((repo) => {
            return (
              <Repo key={repo.id} data-testid='repos'>
                <RepoHeader>
                  <h3>{repo.name}</h3>
                  <a href={repo.html_url} target='_blank' rel='noreferrer'>
                    <ExternalLinkIcon w={4} h={4} />
                  </a>
                </RepoHeader>
                <p>{repo.description ? repo.description : 'No description'}</p>
                <Tag tagName={repo.language} />
              </Repo>
            )
          })}
        </Grid>
        <Pagination />
      </VStack>
    </Content>
  )
}
