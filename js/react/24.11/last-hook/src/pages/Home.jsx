import { Link } from 'react-router-dom'


const Home = ()=>{
    return(
        <>
        Home
        <button>
      <Link to={`/SingIn`}>
      SignIn
      </Link>
    </button>
        <button>
      <Link to={`/QueryPrint`}>
      QueryPrint
      </Link>
    </button>
        </>
    )
}

export default Home;