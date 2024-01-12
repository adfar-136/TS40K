
function App() {
  return (
    <div className="App">
      <h1>Adfar RAsheed</h1>
      {header}
      {header}
      {main}
      {header}
      {header}
      <h3>{name}</h3>
    </div>
  );
}
const myStyle = {
  color: "red",
  fontSize:"40px",
  backgroundColor:"pink",
  padding:"30px" 
}
const header = <h1 style={{color:"red",fontSize:"50px",backgroundColor:"blue"}}>LPU React Course</h1>
const main = <div style={myStyle}><h1>Welcome to resact course</h1><p>Started yesterday</p></div>
const name = "Adfar"
export default App;
