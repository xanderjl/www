import type { LinkProps } from '@chakra-ui/next-js'
import { Link } from '@chakra-ui/next-js'
import { Box, Divider, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import { GitHub } from 'iconoir-react'
import type { FC } from 'react'

export interface OSSCardProps extends LinkProps {
  name: string
  description?: string
}

export const OSSCard: FC<OSSCardProps> = ({
  name,
  description,
  href,
  ...rest
}) => {
  return (
    <Link
      href={href}
      display='flex'
      background='transparent'
      flexDirection='column'
      justifyContent='space-between'
      maxW='275px'
      p={4}
      borderWidth={1}
      borderRadius={8}
      borderColor='black'
      _hover={{ color: 'red.400', borderColor: 'red.400' }}
      {...rest}
    >
      <Box>
        <Heading size='md' pb={2}>
          {name}
        </Heading>
        {description && <Text>{description}</Text>}
      </Box>
      <Box>
        <Divider my={4} borderColor='red.400' />
        <Flex justifyContent='space-between'>
          <Text as='span' flex={1}>
            Check it out
            <br />
            on GitHub
          </Text>
          <Icon as={GitHub} boxSize={6} />
        </Flex>
      </Box>
    </Link>
  )
}
