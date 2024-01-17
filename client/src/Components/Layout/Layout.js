import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet";
import  { Toaster } from 'react-hot-toast';

// no differnce write like first pass props then props.children 
// simply write children curly brackets then pass it 

const Layout = ({children,title,description,keywwords,author})=> {

  return (
    <div>
      <Header/>
      <main className='min-h-screen'>{children}</main>

    </div>
  )
}



export default Layout