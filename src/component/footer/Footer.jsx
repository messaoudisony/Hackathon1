import "./footer.css"
import Icon from '@mdi/react';
import { mdiFacebook, mdiInstagram, mdiYoutube, mdiTwitter, mdiLinkedin  } from '@mdi/js';

export default function Footer() {
  return (
    <div className="main">
    <footer className="text-center text-lg-start">

    <div className="container d-flex justify-content-center p-1">
       <Icon path={mdiFacebook} size={1.5} className='mx-3' />
       <Icon path={mdiInstagram } size={1.5} className='mx-3 ' />
       <Icon path={mdiYoutube} size={1.5} className='mx-3' />
       <Icon path={mdiTwitter} size={1.5} className='mx-3' />
       <Icon path={mdiLinkedin } size={1.5} className='mx-3' />
    </div>
    <div className="text-center p-1">© 2020 Copyright: </div>
  </footer>
</div>
  )
}
