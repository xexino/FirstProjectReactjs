import Welcome from "./component-2/Welcome";

function App() {
  const alertMyInput = name => alert(name);
  return (
    <Welcome name="anthony" functionHello={alertMyInput} />
  );
}

export default App;
