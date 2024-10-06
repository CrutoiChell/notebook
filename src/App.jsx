import { useState } from 'react'
import styles from './App.module.css'
import { randomId } from './helpers/random';
import { Tasks } from './components/Tasks/Tasks';
import { Input } from './components/Input/input';
export default function App() {
  const [list, setList] = useState('');
  const [arr, setArr] = useState([
    {
      id: randomId(), show: false, text: 'The sun is shining brightly today'
    },
    {
      id: randomId(), show: false, text: 'Life is a beautiful adventure'
    },
    {
      id: randomId(), show: false, text: 'The cat is sleeping on the couch'
    },
    {
      id: randomId(), show: false, text: 'The smell of freshly baked cookies is amazing'
    },
    {
      id: randomId(), show: false, text: 'The sound of the ocean is so calming'
    },
    {
      id: randomId(), show: false, text: 'The stars are twinkling in the night sky'
    },
    {
      id: randomId(), show: false, text: 'The taste of a ripe strawberry is sweet'
    },
    {
      id: randomId(), show: false, text: 'The feeling of sand between my toes is wonderful'
    },
    {
      id: randomId(), show: false, text: 'The sound of birds chirping is so peaceful'
    },
    {
      id: randomId(), show: false, text: 'The smell of a freshly cut lawn is refreshing'
    },
    {
      id: randomId(), show: false, text: 'The sight of a beautiful sunset is breathtaking'
    },
    {
      id: randomId(), show: false, text: 'The feeling of a warm hug is comforting'
    },
    {
      id: randomId(), show: false, text: 'The taste of a cold ice cream is delicious'
    },
    {
      id: randomId(), show: false, text: 'The sound of a babbling brook is soothing'
    },
    {
      id: randomId(), show: false, text: 'The smell of a fragrant flower is lovely'
    },
    {
      id: randomId(), show: false, text: 'The sight of a majestic mountain is awe-inspiring'
    },
    {
      id: randomId(), show: false, text: 'The feeling of a gentle breeze is calming'
    },
    {
      id: randomId(), show: false, text: 'The taste of a juicy burger is satisfying'
    },
    {
      id: randomId(), show: false, text: 'The sound of a crackling fire is cozy'
    },
    {
      id: randomId(), show: false, text: 'The smell of a freshly brewed coffee is invigorating'
    },
    {
      id: randomId(), show: false, text: 'The sight of a beautiful painting is stunning'
    },
    {
      id: randomId(), show: false, text: 'The feeling of a soft blanket is comforting'
    },
    {
      id: randomId(), show: false, text: 'The taste of a sweet dessert is indulgent'
    },
    {
      id: randomId(), show: false, text: 'The sound of a gentle stream is peaceful'
    },
    {
      id: randomId(), show: false, text: 'The smell of a fragrant candle is relaxing'
    },
    {
      id: randomId(), show: false, text: 'The sight of a beautiful garden is serene'
    },
    {
      id: randomId(), show: false, text: 'The feeling of a warm bath is soothing'
    },
    {
      id: randomId(), show: false, text: 'The taste of a fresh fruit is refreshing'
    },
    {
      id: randomId(), show: false, text: 'The sound of a happy laughter is contagious'
    },
    {
      id: randomId(), show: false, text: 'The smell of a freshly baked bread is appetizing'
    },
    {
      id: randomId(), show: false, text: 'The sight of a beautiful cityscape is impressive'
    },
    {
      id: randomId(), show: false, text: 'The feeling of a cool breeze is refreshing'
    },
    {
      id: randomId(), show: false, text: 'The taste of a spicy dish is exciting'
    },
    {
      id: randomId(), show: false, text: 'The sound of a gentle piano is soothing'
    },
    {
      id: randomId(), show: false, text: 'The smell of a fragrant perfume is alluring'
    },
    {
      id: randomId(), show: false, text: 'The sight of a beautiful waterfall is breathtaking'
    },
    {
      id: randomId(), show: false, text: 'The feeling of a soft grass is comforting'
    },
    {
      id: randomId(), show: false, text: 'The taste of a sweet tea is soothing'
    },
    {
      id: randomId(), show: false, text: 'The sound of a happy music is uplifting'
    },
    {
      id: randomId(), show: false, text: 'The smell of a freshly cut wood is earthy'
    },
    {
      id: randomId(), show: false, text: 'The sight of a beautiful beach is stunning'
    },
    {
      id: randomId(), show: false, text: 'The feeling of a warm sand is comforting'
    },
    {
      id: randomId(), show: false, text: 'The taste of a fresh seafood is delicious'
    },
    {
      id: randomId(), show: false, text: 'The sound of a seagull is calming'
    },
    {
      id: randomId(), show: false, text: 'The smell of a salty air is invigorating'
    },
    {
      id: randomId(), show: false, text: 'The sight of a beautiful mountain range is awe-inspiring'
    },
    {
      id: randomId(), show: false, text: 'The feeling of a cool mist is refreshing'
    },
    {
      id: randomId(), show: false, text: 'The taste of a sweet honey is indulgent'
    },
    {
      id: randomId(), show: false, text: 'The sound of a gentle wind is soothing'
    },
  ])
  const [edit, setEdit] = useState(null)
  const [show, setshow] = useState(false)
  const [search, setsearch] = useState('')

  function handleAdd() {
    if (list.trim()) {
      if (edit !== null) {
        let res = arr.map(item => item.id === edit.id ? { ...item, text: list } : item)
        setArr(res)
        setEdit(null)
        setList('')
        setsearch('')
      } else {
        setArr([...arr, { id: randomId(), show: false, text: list },])
        setList('')
      }
    }
  }

  function handleEdit(item) {
    setList(item.text);
    setEdit(item)
  }

  function handleDelite(item) {
    let copy = arr.filter(elem => elem !== item)
    setArr(copy)
  }

  let filtredarr = arr.filter(item => item.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <main className={styles.container}>

        <h1>NOTEBOOK</h1>
        <div className={styles.inputs}>
          <Input
            list={list}
            edit={edit}
            setList={setList}
            handleAdd={handleAdd}
            setshow={setshow}
            show={show}
          />
          {show ?
            <input
              className={styles.input}
              placeholder='Enter the note you want to find...'
              value={search}
              onChange={event => setsearch(event.target.value)} />
            : <></>}

        </div>

        {show ?
          <Tasks
            arr={arr}
            search={search}
            filtredarr={filtredarr}
            handleDelite={handleDelite}
            handleEdit={handleEdit}
          /> :
          <></>
        }
      </main>
    </>
  )
}

