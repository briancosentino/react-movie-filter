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
  const [filteredList, setFilteredList] = useState(movies)
  console.log(genre);
  /*   useEffect(()=>{
      let newList;
      if(genre === 'default'){
        newList = 
      }
    },[]) */

  return (
    <>
      <select onChange={(e) => { setGenre(e.target.value) }} className='my-16 mx-8 p-4 rounded-lg border border-stone-300 w-[30%]'  >
        <option name="" id="" disabled>Scegli un genere</option>
        <option name="Fantascienza" id="Fantascienza" value={'Fantascienza'} >Fantascienza</option>
        <option name="Thriller" value={'Thriller'} id="Thriller" >Thriller</option>
        <option name="Romantico" value={'Romantico'} id="Romantico" >Romantico</option>
        <option name="Azione" value={'Azione'} id="Azione" >Azione</option>



      </select>
      <div className='flex flex-wrap gap-4'>
        {filteredList.map((movie, idx) => (
          <div key={idx} id="card" className='border border-stone-300 rounded-lg p-4'>
            <h2 className='font-semibold text-xl mb-4'>{movie.title}</h2>
            <p ><span className='font-semibold'>Genere : </span>{movie.genre}</p>
          </div>
        ))}

      </div>
    </>
  )
}

export default App
