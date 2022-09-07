import Head from 'next/head'
import Filter from '../comps/Filter'
import JobList from '../comps/JobList'
import GlobalStyles from '../comps/styles/Global'
import Pagination from '../comps/Pagination'

//in .env.local
//CONTENTFUL_SPACE_ID=h4fy7qjn6mui
//CONTENTFUL_ACCESS_KEY=ugwo2fZGO-fJeEdWkW-Ujj-1HrFeswaUc_usdsjCLrE

import { createClient } from 'contentful'
export async function getStaticProps({page=1}){
  
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    environment: process.env.CONTENTUL_ENVIRONMENT_ID
  })

  const res = await client.getEntries({content_type:'job', limit: 8})

  return{
    props: {
      jobs: res.items,
      page: +page
    }
  }
}

export default function Home({jobs}) {
  console.log(jobs)
  return (
    <div>
      <Head>
        <title>Becklyn</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles/>
      <Filter/>
      <div className='list'>
        {jobs.map(job => (
          <JobList key={job.sys.id} job={job}/>
        ))}
      </div>
      <Pagination/>
    </div>
  )
}
