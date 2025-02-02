
import './App.css';

function App() {
  let name="Vinayak";
  let l=[10,23,23,4,45];
  let obj={
    name: "vinayak nishad",
    age:21
  }
  return (
    <div className='App'>
      <h1 className='name'>My name is {name}</h1>
      {
        l.map((v)=>{
          return (
            <div>{v}</div>
          )
        })
      }
      <h1>{obj.name}</h1>
    </div>
  );
}

export default App;
