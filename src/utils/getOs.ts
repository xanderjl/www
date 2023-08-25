export const getOs = (): string => {
  let os: string = ''

  if (typeof window !== 'undefined') {
    const userAgent = navigator.userAgent
    const osString = userAgent.includes('Mac')
      ? 'mac'
      : userAgent.includes('Win')
      ? 'win'
      : ''
    os = osString
  }

  return os
}
