import { useGlobalContext } from '@/helpers/contextGlobal'

type CenterRuleProps = {
  totalArredondado: number;
  activePage: number;
};

type PageProps = (number | '...')[];

const centerRule = ({ totalArredondado, activePage }: CenterRuleProps) =>
  activePage - 1 <= 0
    ? 1
    : activePage === totalArredondado
      ? activePage - 2
      : activePage - 1

const isNumber = (value: any) => typeof value === 'number'

export const pagination = ({ totalArredondado = 1, activePage = 1 }) => {
  if (totalArredondado <= 5) {
    return Array.from({ length: totalArredondado }, (_, i) => i + 1)
  }

  const visiblePages = 3
  let pages: PageProps = [
    1,
    ...Array.from(
      { length: visiblePages },
      (_, i) => i + centerRule({ totalArredondado, activePage }),
    ),
    totalArredondado,
  ]

  pages = pages.filter((page, index, array) => array.indexOf(page) === index)

  let firstPage
  let secondPage

  let penultimatePage
  let lastPage

  const setFirstPage = isNumber(pages[0]) ? (firstPage = pages[0]) : null
  const setSecondPage = isNumber(pages[1]) ? (secondPage = pages[1]) : null
  const setPenultimatePage = isNumber(pages[pages.length - 2])
    ? (penultimatePage = pages[pages.length - 2])
    : null
  const setLasPage = isNumber(pages[pages.length - 1])
    ? (lastPage = pages[pages.length - 1])
    : null

  if (secondPage === firstPage + 2) {
    pages = [firstPage, firstPage + 1, ...pages.slice(1)]
  }

  if (penultimatePage === lastPage - 2) {
    pages = [...pages.slice(0, -1), lastPage - 1, lastPage]
  }

  firstPage = pages[0]
  secondPage = pages[1]

  if (secondPage > firstPage + 2) {
    pages = [firstPage, '...', ...pages.slice(1)]
  }

  penultimatePage = pages[pages.length - 2]
  lastPage = pages[pages.length - 1]

  if (penultimatePage < lastPage - 2) {
    pages = [...pages.slice(0, -1), '...', lastPage]
  }

  return pages
}

// const pagination = ({ totalArredondado = 1, activePage = 1 } = {}) => {
//   if (totalArredondado <= 5) {
//     return Array.from({ length: totalArredondado }, (_, i) => i + 1)
//   }
//
//   const visiblePages = 3
//   let pages: PageProps = [
//     1,
//     ...Array.from(
//       { length: visiblePages },
//       (_, i) => i + centerRule({ totalArredondado, activePage }),
//     ),
//     totalArredondado,
//   ]
//
//   pages = pages.filter((page, index, array) => array.indexOf(page) === index)
//
//   let firstPage
//   let secondPage
//
//   let penultimatePage
//   let lastPage
//
//   const setFirstPage = isNumber(pages[0]) ? (firstPage = pages[0]) : null
//   const setSecondPage = isNumber(pages[1]) ? (secondPage = pages[1]) : null
//   const setPenultimatePage = isNumber(pages[pages.length - 2])
//     ? (penultimatePage = pages[pages.length - 2])
//     : null
//   const setLasPage = isNumber(pages[pages.length - 1])
//     ? (lastPage = pages[pages.length - 1])
//     : null
//
//   if (secondPage === firstPage + 2) {
//     pages = [firstPage, firstPage + 1, ...pages.slice(1)]
//   }
//
//   if (penultimatePage === lastPage - 2) {
//     pages = [...pages.slice(0, -1), lastPage - 1, lastPage]
//   }
//
//   firstPage = pages[0]
//   secondPage = pages[1]
//
//   if (secondPage > firstPage + 2) {
//     pages = [firstPage, '...', ...pages.slice(1)]
//   }
//
//   penultimatePage = pages[pages.length - 2]
//   lastPage = pages[pages.length - 1]
//
//   if (penultimatePage < lastPage - 2) {
//     pages = [...pages.slice(0, -1), '...', lastPage]
//   }
//
//   return pages
// }

// export default pagination
