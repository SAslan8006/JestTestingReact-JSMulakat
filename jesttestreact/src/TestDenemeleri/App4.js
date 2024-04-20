import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("deneme");
  useEffect(() => {
    setTimeout(() => {
      setName("Mehmet")
    }, 300)
  }, [name])
  return (
    <div className="App">
      {name}
    </div>
  );
}

export default App;
