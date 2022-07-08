import { Typography } from '@mui/material'
import React from 'react'
import './Footer.css'
import {BsInstagram} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
        <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
            Hello, I am Jaydip Parmar. I am Currently pursuing my B.Tech in ICT from DAIICT, Gandhinagar.
            I am Competitive Programmer and web Development enthusiastic.
        </Typography>
        <Link to="/contact" className='footercontact'>
                <Typography>Contact Us</Typography>
        </Link>
        </div>
        <div>
            <Typography variant='h6'>Social Media</Typography>
            <a href="https://www.linkedin.com/in/parmar-jaydip-a503ab244/" target="black">
              <BsLinkedin/>
            </a>
            <a href="https://twitter.com/Jayd_parmar" target="black">
              <BsTwitter/>
            </a>
            <a href="https://www.instagram.com/_jayd_parmar64/" target="black">
              <BsInstagram/>
            </a>
            <a href="https://github.com/jaydparmar" target="black">
              <BsGithub/>
            </a>
        </div>

    </div>
  )
}

export default Footer
