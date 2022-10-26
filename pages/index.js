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
export default function Example () {
  return (
    <div className='bg-white'>
      <main className='mt-6'>
        <div>
          {/* Hero card */}
          <div className='relative'>
            <div className='absolute inset-x-0 bottom-0 h-1/2' />
            <div className='max-w-3xl mx-auto sm:px-6 lg:px-8'>
              <p className='mt-0 p-0 text-2xl font-bold'>
                <span className='ml-1 text-slate-500'>random variable</span>
              </p>
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
                    We&#39;re a team of full stack engineers, designers, and
                    data scientists helping innovative businesses tackle hard
                    growth challenges
                  </p>
                  <div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
                    <a
                      href='#'
                      className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-indigo-700 bg-white hover:bg-indigo-50'
                    >
                      <span className='wave pr-2'>👋 </span>let&#39;s get
                      started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='mx-auto max-w-xl py-8'>
            <div className=''>
              <h2 className='mx-auto max-w-md text-center text-2xl font-bold text-slate-500 lg:max-w-xl lg:text-left'>
                Founded by growth talent from
              </h2>
              <div className='mt-8 flow-root self-center lg:mt-0'>
                <div className='-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4'>
                  <div className='mt-4 flex flex-shrink-0 flex-grow justify-center lg:ml-4 grayscale opacity-90'>
                    <img className='h-12' src='/stripe.png' alt='Stripe logo' />
                  </div>
                  <div className='mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center items-center lg:ml-4 lg:flex-grow-0 grayscale opacity-75'>
                    <img
                      className='h-8'
                      src='/atlassian.png'
                      alt='Atlassian logo'
                    />
                  </div>
                  <div className='mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0 grayscale opacity-75'>
                    <img
                      className='h-12'
                      src='/pinterest.jpg'
                      alt='Pinterest logo'
                    />
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
