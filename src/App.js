import { useState } from 'react';
import './App.css';
import useRemove from './hooks/delete';

function App() {
  const initLists = ['Huyen', 'Hoa', 'Hung', 'Long']
  const [list, removeItemList] = useRemove(initLists)

  const [removeName, setRemoveName] = useState('');

  const printList = list =>{
    let listPrint = '[';
    for(let i = 0; i < list.length; i++)
    {
      listPrint = listPrint + list[i] + ","
    }
    if (list.length > 0)
      listPrint = listPrint.substring(0, listPrint.length-1);
    
      listPrint = listPrint + "]"
    return listPrint
  }

  const handleOn = () => {
    removeItemList(removeName)
  }
  

  return (
    <div className="App">
        <div>学生一覧：{printList(initLists)}</div>
        <div>削除する名前を入力してください。</div>
        <input 
            onChange={({ target }) => setRemoveName(target.value)}
            value={removeName}>
        </input>

        <button onClick={handleOn}>
            確定
        </button>

        <div>削除する名前：{removeName}</div>
        <div>
          新しい一覧：{printList(list)}
        </div>
    </div>
  );
}

export default App;
