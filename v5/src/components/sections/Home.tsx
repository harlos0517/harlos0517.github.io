import { Anchor, Center, Group, Image, Stack, Title, useMatches } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import React from 'react'

import logoFull from '@/assets/images/logo-full.svg'
import icon from '@/assets/images/icon.svg'
import Divider from '@/components/Divider'
import {
  IconBrandInstagram,
  IconBrandSoundcloud,
  IconBrandTwitterFilled,
  IconBrandYoutubeFilled,
  IconCoffee,
  IconCoinFilled,
} from '@tabler/icons-react'

const Home: React.FC = () => {
  const { t } = useTranslation()
  const gap = useMatches({
    base: 24,
    sm: 48,
  })

  const pages = [
    { to: '#about', label: t('about') },
    { to: '#portfolio', label: t('portfolio') },
    { to: '#commission', label: t('commission') },
  ]

  const links = [
    { element: IconBrandYoutubeFilled, link: 'https://www.youtube.com/@harlosmusic' },
    { element: IconBrandTwitterFilled, link: 'https://twitter.com/harlosmusic' },
    { element: IconBrandInstagram, link: 'https://www.instagram.com/harlos.music' },
    { element: IconBrandSoundcloud, link: 'https://soundcloud.com/harlosmusic' },
    { element: IconCoinFilled, link: 'https://www.hivebee.com.tw/harlosmusic/Donate' },
    { element: IconCoffee, link: 'https://ko-fi.com/harlosmusic' },
  ]

  return <Center id="home" bg="accent" h="100lvh" mih="20vw"
    style={{ flexDirection: 'column', gap: '2vw' }}
  >
    <Image src={logoFull} alt="HARLOS" w="40vw" h="auto" />
    <Divider />
    <Title order={2} c="white" mt="-24px">{t('harlos_music')}</Title>
    <Group my="xl" gap={gap}>
      {pages.map(page => (
        <Anchor key={page.to} href={page.to}>
          <Stack align="center">
            <Image src={icon} alt="*" w={{ base: 64, sm: 96 }} h={{ base: 64, sm: 96 }} />
            <Title order={5} c="white" fz={{ base: 'sm', sm: 'unset' }}>{page.label}</Title>
          </Stack>
        </Anchor>
      ))}
    </Group>
    <Group>
      {links.map(link => {
        const Icon = link.element
        return (
          <Icon size={24} color="white" style={{ cursor: 'pointer' }}
            onClick={() => window.open(link.link, '_blank')}
          />
        )
      })}
    </Group>
  </Center>
}

export default Home
