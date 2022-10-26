/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
  CheckIcon,
  GlobeAltIcon,
  ScaleIcon,
  LightningBoltIcon,
  TerminalIcon,
  BeakerIcon,
  DatabaseIcon,
  ChartBarIcon,
  CubeTransparentIcon
} from '@heroicons/react/outline'

import { ChevronDownIcon } from '@heroicons/react/solid'

// { name: 'full stack development' },
// { name: 'data analysis and pipeline management' },
// { name: 'machine learning modeling' },
// { name: 'experimentation (A/B testing, statistical modeling, etc)' },
// { name: 'data analysis' }
const services = [
  {
    id: 1,
    name: 'Product engineering',
    description:
      'We speak backend and frontend and can help you ship new features to your users quickly',
    icon: TerminalIcon
  },
  {
    id: 4,
    name: 'Experimentation and A/B testing',
    description:
      "We've run 100s of experiments and can help you avoid common pitfalls and optimize your product's experience",
    icon: BeakerIcon
  },
  {
    id: 2,
    name: 'Data engineering',
    description: 'Workdlows',
    icon: DatabaseIcon
  },
  {
    id: 3,
    name: 'Machine learning modeling',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CubeTransparentIcon
  },
  {
    id: 3,
    name: 'Data analysis',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ChartBarIcon
  }
]
const solutions = [
  {
    name: 'Inbox',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: InboxIcon
  },
  {
    name: 'Messaging',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: AnnotationIcon
  },
  {
    name: 'Live Chat',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ChatAlt2Icon
  },
  {
    name: 'Knowledge Base',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: QuestionMarkCircleIcon
  }
]
const navigation = [
  { name: 'Pricing', href: '#' },
  { name: 'Partners', href: '#' },
  { name: 'Company', href: '#' }
]

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

const features = [
  { name: 'full stack development' },
  { name: 'data analysis and pipeline management' },
  { name: 'machine learning modeling' },
  { name: 'experimentation (A/B testing, statistical modeling, etc)' },
  { name: 'data analysis' }
]
const phil = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon
  }
]

export default function Example () {
  return (
    <div className='bg-white'>
      <header>
        <div className='flex justify-between items-center max-w-7xl mx-auto px-8 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-32'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <div>
              <p className='text-2xl font-extrabold  text-slate-200'>
                <span className='text-indigo-700'>random variable</span>
              </p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div>
          {/* Hero card */}
          <div className='relative'>
            <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100' />
            <div className='max-w-5xl mx-auto sm:px-6 lg:px-8'>
              <div className='relative shadow-xl sm:rounded-2xl sm:overflow-hidden'>
                <div className='absolute inset-0'>
                  <div className='absolute inset-0 bg-indigo-700 mix-blend-multiply' />
                </div>
                <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
                  <h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
                    <span className='block text-white'>Your growth team</span>
                    <span className='block text-indigo-200'>on speed dial</span>
                  </h1>
                  <p className='mt-6 max-w-2xl mx-auto text-center text-xl text-indigo-200'>
                    We're a team of full stack engineers, designers, and data
                    scientists helping innovative businesses tackle hard growth
                    challenges
                  </p>
                  <div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
                    <a
                      href='#'
                      className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-indigo-700 bg-white hover:bg-indigo-50'
                    >
                      <span className='wave pr-2'>👋 </span>let's get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
