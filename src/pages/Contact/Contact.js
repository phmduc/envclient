import React, { Component } from 'react';
import FooterOnly from '~/layouts/FooterOnly/FooterOnly.js';
import Tabs from '~/components/tabs/tabs';
import { useRef } from 'react';
import './contact.css'

function Contact() {

  return (
      <FooterOnly>
        <div className='contact'>
          <iframe src="https://tawk.to/chat/64e5b8e394cf5d49dc6bfeec/1h8glkf51" width="680" height="480" allowFullScreen></iframe>
        </div>
      
      </FooterOnly>
  );
}

export default Contact;