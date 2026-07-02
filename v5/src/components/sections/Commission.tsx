import { Box, Container, Title, Button, Anchor, Group, Center, Text, Table } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import React from 'react'

import { DividerAccent } from '@/components/Divider'
import useData, { Sheet } from '@/hooks/useData'

const Commission: React.FC = () => {
  const { t } = useTranslation()

  const queue = useData(Sheet.QUEUE)
    .filter(qi => qi.progress !== 'completed' && qi.progress !== 'cancelled')

  const rows = queue.map((qi, i) => (
    <Table.Tr key={i}>
      <Table.Td>{qi.content}</Table.Td>
      <Table.Td>{qi.commissioner}</Table.Td>
      <Table.Td>{qi.user}</Table.Td>
      <Table.Td>{t(`queue_${qi.progress}`)}</Table.Td>
    </Table.Tr>
  ))

  return <Box pos="relative">
    <Box id="commission" pos="absolute" top="-80px"/>
    <Container maw="640px" py="10vw" px="xl">
      <Title order={2} ta="center">{t('commission')}</Title>
      <DividerAccent />
      <Center>
        <Group>
          <Anchor
            href="https://forms.gle/VJ1qX7cHmZKGEA2b7"
            target="_blank"
            rel="noopener noreferrer"
            c="white"
          >
            <Button><Text c="white">{t('googleForm')}</Text></Button>
          </Anchor>
          <Anchor
            href="https://vgen.co/harlos_music"
            target="_blank"
            rel="noopener noreferrer"
            c="white"
          >
            <Button><Text c="white">{t('vgen')}</Text></Button>
          </Anchor>
        </Group>
      </Center>
      <Title order={3} ta="center" mt="xl" mb="md">{t('queueTitle')}</Title>
      <Table highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>{t('queueContent')}</Table.Th>
            <Table.Th>{t('queueCommissioner')}</Table.Th>
            <Table.Th>{t('queueUser')}</Table.Th>
            <Table.Th>{t('queueProgress')}</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows}
        </Table.Tbody>
      </Table>
    </Container>
  </Box>
}

export default Commission
