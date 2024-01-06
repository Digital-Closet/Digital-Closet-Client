import React from 'react'

const Jumbotron = (props) => {
  return (
    <div className='container-fluid'
    
    > 
     <div className='row'>
        <div className='col text-center p-4' style={{backgroundColor: '#E5E5E5'}}>
            <h1 className='header' style={{fontSize:'80px', fontFamily: 'Peckish', color:'black'}}>{props.title}</h1>
            <p className='lead' style={{fontFamily:'Glacial', fontWeight:'bold'}}>{props.subtitle}</p>
        </div>
     </div>
      
    </div>
  )
}

export default Jumbotron
