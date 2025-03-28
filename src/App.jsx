import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


/* Create un nuovo progetto React e implementate un sistema di filtro per una lista di film in base al genere.
L'array dei film è già fornito:
[
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]
Dovrete utilizzare lo stato e useEffect per gestire il filtraggio dinamico.
Per oggi diamo priorità alla logica e alla gestione dello stato. Una volta funzionante, possiamo pensare allo stile!
Note
Il filtro deve funzionare dinamicamente quando l'utente seleziona un genere dalla select.
Se non viene selezionato alcun genere, devono essere mostrati tutti i film. :scream:
 */



function App() {

  const movies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]
  const [genre, setGenre] = useState('default')
/*   const [newList, setNewList] = useState(movies)
 */  const [filteredList, setFilteredList] = useState(movies)
  const [search, setSearch] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newGenre, setNewGenre] = useState('')

  const handleNewTitleChange = (e) => {
    setNewTitle(e.target.value)
  }
  const handleNewGenreChange = (e) => {
    setNewGenre(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setFilteredList([...filteredList, { id: movies.length + 1, title: newTitle, genre: newGenre }])
    setNewGenre('')
    setNewTitle('')
  }

  useEffect(() => {
    if (genre !== 'default') {
      setFilteredList(movies.filter(movie => movie.genre === genre))
    } else {
      setFilteredList(movies)
    }



  }, [genre])

  console.log(filteredList);

  const handleSearchChange = (e) => {
    setSearch(e.target.value)




  }
  console.log(search);
  useEffect(() => {
    if (search.length > 0) {
      console.log(search.length);


      setFilteredList(movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase())))
    } else {

      setFilteredList(movies)
    }

  }, [search])

  return (
    <>


      <input type="text" onChange={handleSearchChange} name="search" id="search" placeholder='Search here...' className='w-[50%] m-auto mt-4 p-2 border border-stone-300 rounded-xl block' />
      <select defaultValue={'default'} onChange={(e) => { setGenre(e.target.value) }} className='my-16 mx-8 p-4 rounded-lg border border-stone-300 w-[30%]'  >
        <option name="Tutti" id="Tutti" value={'default'} >Tutti</option>

        <option name="Fantascienza" id="Fantascienza" value={'Fantascienza'} >Fantascienza</option>
        <option name="Thriller" value={'Thriller'} id="Thriller" >Thriller</option>
        <option name="Romantico" value={'Romantico'} id="Romantico" >Romantico</option>
        <option name="Azione" value={'Azione'} id="Azione" >Azione</option>



      </select>
      <div className='flex mx-4 flex-wrap gap-4'>
        {filteredList.map((movie, idx) => (
          <div key={idx} id="card" className='border border-stone-300 rounded-lg p-4'>
            <h2 className='font-semibold text-xl mb-4'>{movie.title}</h2>
            <p ><span className='font-semibold'>Genere : </span>{movie.genre}</p>
          </div>
        ))}


      </div>
      <form onSubmit={handleSubmit} className='flex flex-col w-[50%] m-auto  mt-12 gap-4'>
        <h2 className='text-center text-lg font-semibold mb-4'>Aggiungi un nuovo film</h2>
        <input onChange={handleNewTitleChange} value={newTitle} className='p-2 border border-stone-300 rounded-lg mb-4 ' type="text" name="addTitle" id="addTitle" placeholder='Scrivi il titolo...' />
        <input onChange={handleNewGenreChange} value={newGenre} className='p-2 border border-stone-300 rounded-lg mb-4 ' type="text" name="addGenre" id="addGenre" placeholder='Scrivi il genere...' />
        <button className='bg-blue-500 text-white rounded-lg p-2' type="submit">Aggiungi</button>
      </form>
    </>
  )
}

export default App
