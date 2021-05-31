import React, {Component} from 'react';
import {render} from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import {
    FacebookIcon, FacebookShareButton,
    TwitterShareButton, TwitterIcon, PinterestShareButton,
    RedditShareButton,
    TumblrShareButton,
    PinterestIcon,
    RedditIcon, TumblrIcon
} from 'react-share'
import Home from './Home';
import Checkout from './Checkout';
import './Footer.css';
//import Contact from './Contact'


export default class Footer extends Component {
  render() {
    return (
    <div>

    		<footer class="footer-distributed">

    			<div class="footer-right">


    				<a href="#"><i class="fa fa-facebook"></i></a>
    				<a href="#"><i class="fa fa-twitter"></i></a>
    				<a href="#"><i class="fa fa-linkedin"></i></a>
    				<a href="#"><i class="fa fa-github"></i></a>

    			</div>

    			<div class="footer-left">

    				<p class="footer-links">
    					<a class="link-1" href="Home">Home</a>

    					<a href="Checkout">Checkout</a>

    					<a href="#">Pricing</a>

    					<a href="#">About</a>


    					<a href="Contact">Contact</a>
    				</p>

    				<p id="footer"> &copy; {new Date().getFullYear()} Copyright: <a href="https://www.linkedin.com/in/tejeswini-katuboyana-339800147/"> Teju-Teja </a></p>
    			</div>

    		</footer>
    		</div>
     /* <footer className="page-footer blue-grey darken-1">
          <div >
          <div>
            <div className="footer-copyright">

                    <div>
                      <a href="https://github.com/teja804/Millets-Web">
                        Download Source code{" "}
                      </a>
                    </div>

                    <div>
                      <a href="https://youtu.be/1_IYL9ZMR_Y">
                        Watch Learning Video
                        </a>
                      </div>


                    <div>
                      <a href="https://codingwithbasir.com/course/learn-react-redux/">
                        Learn React From Scratch
                      </a>
                    </div>


                </div>
                </div>
            <div className="container">
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.linkedin.com/in/tejeswini-katuboyana-339800147/"> Teju-Teja </a>


            </div>
            </div>

        </footer> */
    )
  }
}