import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getContactPage } from '../data/contact'

export default function useContactPage(): string {
  const router = useRouter()
  const pathWithoutQuery = router.asPath.split(/[?#]/, 1)[0]
  const [contactPage, setContactPage] = useState(() => getContactPage(pathWithoutQuery))

  useEffect(() => {
    if (router.isReady) setContactPage(getContactPage(router.asPath))
  }, [router.asPath, router.isReady])

  return contactPage
}
