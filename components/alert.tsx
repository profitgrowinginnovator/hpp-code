import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn('border-b', {
        'bg-neutral-800 border-neutral-800 text-white': preview,
        'bg-neutral-50 border-neutral-200': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {
            <>
              Ever had a problem you thought could not be solved?{' '}
              <a
                href={`https://forms.gle/AVe73hV4o35AnsFr5`} target="_new"
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                Get Free Consulting
              </a>
              .
            </>
          }
        </div>
      </Container>
    </div>
  )
}

export default Alert
