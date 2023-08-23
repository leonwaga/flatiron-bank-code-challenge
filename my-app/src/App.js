import React, {useState, useEffect} from 'react';

function App() {
    const [transactions, setTransactions]= useState([])
    const [search, setSearch] = useState("")
      useEffect(() => {
    fetch( "http://localhost:3000/transactions")
    .then((response) => response.json())
    .then((transaction) => setTransactions(transaction))
    console.log({transactions});
},);
  
function addNewTransactions(newForm) {
  setTransactions(transactions => [...transactions, newForm])

  const servers = {
    method: "POST",
    Headers: {"content-type": "application/json" },
    
    body: JSON.stringify(newForm)
  }
  fetch(` http://localhost:3000/transactions`, servers)
  .then((response) => response.json())
  .then((newForm) => console.log(newForm))
}

  return(
    <div>
      <div className="header-container">
        <h2>The Royal Bank Of Flatiron</h2>
      </div>

      <div>
        <NewTransactionForm onTransactionSubmit={addNewTransactions} />
      </div>
    </div> 
  )
  }



export default App;
