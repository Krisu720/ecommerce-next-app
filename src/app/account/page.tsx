import { getServerSession } from 'next-auth'
import { FC } from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'

interface pageProps {
  
}

const page: FC<pageProps> = async ({}) => {

  const session = await getServerSession(authOptions)

  return <div className='flex flex-col items-center'>
   {session?.user?.email}
  </div>
}

export default page