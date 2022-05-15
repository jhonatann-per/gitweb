import * as  React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Search from '../assets/icons/Search'

const Home: NextPage = () => {
  const [repositories, setRepositories] = React.useState([
    {
      organization: 'angular',
      repository: 'angular/angular',
      stargazers_count: 81331,
      forks_count: 21449,
      watchers_count: 81331,
    },
    {
      organization: 'angular',
      repository: 'angular/angular',
      stargazers_count: 81331,
      forks_count: 21449,
      watchers_count: 81331,
    }
  ])
  const titlesTable = [ 'Organização', 'Repositórios', 'Stars', 'Forks', 'Vizualizações' ]
  
  return (
   <div  className="bg-white p-7 h-screen">
     <Head>
        <title>Pegando repositories</title>   
     </Head>
     <div>
       <p className="font-bold text-midium text-2xl">Repositório</p>
       <p className="text-gray-600 text-sm">38 repositório</p>
     </div>
     <div className="p-4 bg-blue-100 my-5 rounded-2xl" >
       <div className='relative'>
          <Search className="absolute top-2 left-2" />
          <input type="text" className="w-full py-3 pl-12 outline-none text-sm font-medium rounded-lg" placeholder='Digite o repositório' />
       </div>
     </div>
     <div>
        <div className={`grid grid-cols-${titlesTable.length}`}>
          {titlesTable.map((title,index) => (
            <div key={index}>
              <p className='font-bold text-gray-600'>{title}</p>
            </div>
          ))}
        </div>
        <div>
          {repositories.map((repository, index) => (
            <div key={index} className={`grid grid-cols-${titlesTable.length} font-medium text-gray-600 ${index % 2 !== 0 && 'bg-blue-100'} my-2 py-2`}>
              <p>{repository.organization}</p>
              <p>{repository.repository}</p>
              <p>{repository.stargazers_count}</p>
              <p>{repository.forks_count}</p>
              <p>{repository.watchers_count}</p>
            </div>
          ))}
        </div>
     </div>
   </div>
  )
}

export default Home
