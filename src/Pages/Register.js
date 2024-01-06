import { useState } from 'react'
import Jumbotron from '../Componants/Cards/Jumbotron'
import axios from "axios"
import toast from "react-hot-toast"


const Register = () => {
    const [name, setName ] =  useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/register`, 
            {
                name, 
                email, 
                password
            })
            console.log(name, email, password)
        } catch(err){
            console.log(err)
        }
    }
  return (
    <div style={{
        backgroundImage: 'url(https://i.imgur.com/UDjsRoJ.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
         // this ensures that the div takes at least the height of the viewport
      }}>
        <Jumbotron title='DIGITAL CLOSET' subtitle = 'register to get started' />
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 offset-md-3' >
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily:'Glacial' }}>
                    <input type="text" 
                        className="form-control mb-4 p-2" 
                        placeholder='Enter your name'
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        autoFocus
                    />
                    <input type="email" 
                        className="form-control mb-4 p-2" 
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                    <input type="password" 
                        className="form-control mb-4 p-2" 
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                    <button 
                        style={{ backgroundColor: '#24AD73', color: 'white' }} 
                        className='btn form-control' 
                        type='submit'
                        >
                        SUBMIT
                    </button>
                </form>

                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Register
