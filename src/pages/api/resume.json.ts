import type { APIRoute } from 'astro'

interface ContactInfo {
  phoneNumber: {
    display: string
    href: string
  }
  email: {
    display: string
    href: string
  }
}

interface Social {
  name: string
  href: string
}

type Socials = Record<string, Social>

interface ResumeEntry {
  client: string
  role: string
  employmentPeriod: string
  responsibilities: string[]
}

interface Education {
  school: string
  degree: string
  attendancePeriod: string
  description: string
}

const contactInfo: ContactInfo = {
  phoneNumber: {
    display: '519-670-9056',
    href: 'tel:519-670-9056'
  },
  email: {
    display: 'xander@xandydandy.com',
    href: 'mailto:xander@xandydandy.com'
  }
}

const socials: Socials = {
  github: {
    name: 'GitHub',
    href: 'https://www.github.com/xandydandy'
  },
  linkedin: {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/xander-low-5855a910a/'
  }
}

export interface ResumeResponse {
  contactInfo: ContactInfo
  experience: ResumeEntry[]
  education: Education
  socials: Socials
}

const experience: ResumeEntry[] = [
  {
    client: 'Strangelove Labs',
    role: 'Senior Web Developer/Jr. Software Engineering Manager',
    employmentPeriod: 'July 2021 - Present',
    responsibilities: [
      'Leveraged modern web technologies to build a wide range of well-optimized marketing sites and complex web3 applications',
      'Helped shape development cycle as company matured and the frontend team expanded to include multiple folks and projects',
      'Helped drive an annual review format forward alongside our Chief of Staff'
    ]
  },
  {
    client: 'Apollo GraphQL',
    role: 'Contracted Web Developer',
    employmentPeriod: 'January 2022 - April 2022',
    responsibilities: [
      'Drove a full site migration from Gatsby v2 to v4',
      'Implemented a new editing experience in their existing CMS of choice for their marketing team',
      'Started the push to refactor new modules of the site to use TypeScript wherever applicable'
    ]
  }
]

const education: Education = {
  school: 'Fanshawe College',
  degree: 'Ontario College Degree',
  attendancePeriod: 'September 2013 - April 2015',
  description:
    'Built a skillset in music production, engineering and entertainment law.'
}

export const get: APIRoute = () => {
  return new Response(
    JSON.stringify({ contactInfo, experience, education, socials }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}
