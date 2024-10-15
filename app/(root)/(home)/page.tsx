import Link from 'next/link'
import QuestionCard from '~/components/cards/question-card'
import HomeFilters from '~/components/home/home-filter'
import Filter from '~/components/shared/filter'
import NoResult from '~/components/shared/no-result'
import LocalSearchBar from '~/components/shared/search/local-searchbar'
import {Button} from '~/components/ui/button'
import {HomePageFilters} from '~/constants/filters'

const questions = [
  {
    _id: '1',
    title: 'How do I create an AI chatbot?',
    tags: [
      {
        _id: '1',
        name: 'AI',
        color: 'blue',
      },
      {
        _id: '2',
        name: 'Chatbot',
        color: 'green',
      },
    ],
    author: {
      _id: '1',
      name: 'John Doe',
      picture: '/assets/images/user.png',
    },
    upvotes: 10,
    views: 100,
    answers: 2,
    createdAt: new Date(),
  },
  {
    _id: '2',
    title: 'How do I create an AI chatbot?',
    tags: [
      {
        _id: '1',
        name: 'AI',
        color: 'blue',
      },
      {
        _id: '2',
        name: 'Chatbot',
        color: 'green',
      },
    ],
    author: {
      _id: '2',
      name: 'Jane Doe',
      picture: '/assets/images/user.png',
    },
    upvotes: 15,
    views: 200,
    answers: 3,
    createdAt: new Date(),
  },
  {
    _id: '3',
    title: 'How do I create an AI chatbot?',
    tags: [
      {
        _id: '1',
        name: 'AI',
        color: 'blue',
      },
      {
        _id: '2',
        name: 'Chatbot',
        color: 'green',
      },
    ],
    author: {
      _id: '3',
      name: 'John Smith',
      picture: '/assets/images/user.png',
    },
    upvotes: 20,
    views: 300,
    answers: 4,
    createdAt: new Date(),
  },
  {
    _id: '4',
    title: 'How do I create an AI chatbot?',
    tags: [
      {
        _id: '1',
        name: 'AI',
        color: 'blue',
      },
      {
        _id: '2',
        name: 'Chatbot',
        color: 'green',
      },
    ],
    author: {
      _id: '4',
      name: 'Jane Smith',
      picture: '/assets/images/user.png',
    },
    upvotes: 25,
    views: 400,
    answers: 5,
    createdAt: new Date(),
  },
]

export default function Home() {
  return (
    <>
      <div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
        <h1 className='h1-bold text-dark100_light900'>All Questions</h1>

        <Link href='/ask-question' className='flex justify-end max-sm:w-full'>
          <Button className='primary-gradient min-h-[46px] px-4 py-3 !text-light-900'>
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
        <LocalSearchBar
          route='/'
          iconPosition='left'
          imgSrc='/assets/icons/search.svg'
          placeholder='Search for questions'
          otherClasses='flex-1'
        />
        <Filter
          filters={HomePageFilters}
          otherClasses='min-h-[56px] sm:min-w-[170px]'
          containerClasses='hidden max-md:flex'
        />
      </div>

      <HomeFilters />

      <div className='mt-10 flex w-full flex-col gap-6'>
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard key={question._id} {...question} />
          ))
        ) : (
          <NoResult
            title='There’s no question to show'
            description='Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. Our community is here to help you with your queries.'
            link='/ask-question'
            linkTitle='Ask a Question'
          />
        )}
      </div>
    </>
  )
}
