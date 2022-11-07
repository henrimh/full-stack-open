const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old!</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by 
      <a href="https://github.com/henrimh"> henrimh</a>
    </div>
  )
}

const App = () => {
  const nimi = 'Henri'
  const ika = 27

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name= {nimi} age={ika}/>
      <Hello name="Spede" age={2 +12} />
      <Footer/>
    </div>
  )
}

export default App;
