import { useEffect, useState } from "react";
import AppRouter from './routers/AppRouter'

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    console.log(user)
    fetch('/movies')
      .then(res => res.json())
      .then(data => console.log(data))
  })

  return (
    <AppRouter setUser={setUser} user={user}/>
  );
}

export default App;
