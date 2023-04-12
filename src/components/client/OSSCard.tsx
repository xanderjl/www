import { Link } from '@chakra-ui/next-js'
import type { FlexProps } from '@chakra-ui/react'
import { Box, Divider, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import { GitHub } from 'iconoir-react'
import type { FC } from 'react'

export interface OSSCardProps extends FlexProps {
  name: string
  description?: string
  url: URL | string
}

export const OSSCard: FC<OSSCardProps> = ({
  name,
  description,
  url,
  ...rest
}) => {
  return (
    <Flex
      flexDirection='column'
      justifyContent='space-between'
      maxW='275px'
      p={4}
      borderWidth={1}
      borderRadius={8}
      borderColor='black'
      {...rest}
    >
      <Box>
        <Heading size='md' pb={2}>
          {name}
        </Heading>
        {description && <Text>{description}</Text>}
      </Box>
      <Box>
        <Divider my={4} borderColor='red.300' />
        <Link
          href={url}
          display='flex'
          justifyContent='space-between'
          color='black'
          _hover={{ color: 'red.300' }}
        >
          <Text as='span' flex={1}>
            Check it out
            <br />
            on GitHub
          </Text>
          <Icon as={GitHub} boxSize={6} />
        </Link>
      </Box>
    </Flex>
  )
}
