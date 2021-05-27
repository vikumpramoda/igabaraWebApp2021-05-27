import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import home from './img/home.jpg';
import home2 from './img/home2.jpg';
import home3 from './img/home3.jpg';
import home4 from './img/home4.jpg';
import home5 from './img/home5.jpg';
console.log(home);
console.log(home2);
console.log(home3);
console.log(home4);
console.log(home5);


const HomePage=()=>{
      return (
       
        
        <div>
          
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Home page</title>
          
          <link rel="stylesheet" href="./style.css" />
          {/* Slider */}
          <div className="slider">
            <div className="slider-1">
              <img src={home} alt="home" /> 
              <div className="text">
                <h1>Igabara</h1>
                <span />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ipsam. Doloribus quod ipsum assumenda facere natus suscipit fugiat, nulla pariatur error ullam dolore excepturi nam perspiciatis fugit, quos nisi nobis inventore ab voluptatibus, corrupti non. Nobis minus eum dolores aut?</p>
                <Link to ='calendar'><Button variant="warning" size="lg" style={{position:'absolute',right: 5 }} >Book now</Button>{' '}</Link>
              </div>
            </div>
            <div className="slider-2">
              <img src={home2} alt="home2" />
              <div className="text">
                <h1>Hobbit</h1>
                <span />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ipsam. Doloribus quod ipsum assumenda facere natus suscipit fugiat, nulla pariatur error ullam dolore excepturi nam perspiciatis fugit, quos nisi nobis inventore ab voluptatibus, corrupti non. Nobis minus eum dolores aut?</p>
                <Link to ='calendar'><Button variant="warning" size="lg" style={{position:'absolute',right: 5 }} >Book now</Button>{' '}</Link>
              </div>
            </div>
            <div className="slider-3">
              <img src={home3} alt="" />
              <div className="text">
                <h1>House</h1>
                <span />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ipsam. Doloribus quod ipsum assumenda facere natus suscipit fugiat, nulla pariatur error ullam dolore excepturi nam perspiciatis fugit, quos nisi nobis inventore ab voluptatibus, corrupti non. Nobis minus eum dolores aut?</p>
                <Link to ='calendar'><Button variant="warning" size="lg" style={{position:'absolute',right: 5 }} >Book now</Button>{' '}</Link>
              </div>
            </div>
            <div className="slider-4">
              <img src={home4} alt="" />
              <div className="text">
                <h1>Tangalle</h1>
                <span />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ipsam. Doloribus quod ipsum assumenda facere natus suscipit fugiat, nulla pariatur error ullam dolore excepturi nam perspiciatis fugit, quos nisi nobis inventore ab voluptatibus, corrupti non. Nobis minus eum dolores aut?</p>
                <Link to ='calendar'><Button variant="warning" size="lg" style={{position:'absolute',right: 5 }} >Book now</Button>{' '}</Link>
              </div>
            </div>
            <div className="slider-5">
              <img src={home5} alt="" />
              <div className="text">
                <h1>Sri lanka</h1>
                <span />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ipsam. Doloribus quod ipsum assumenda facere natus suscipit fugiat, nulla pariatur error ullam dolore excepturi nam perspiciatis fugit, quos nisi nobis inventore ab voluptatibus, corrupti non. Nobis minus eum dolores aut?</p>
                <Link to ='calendar'><Button variant="warning" size="lg" style={{position:'absolute',right: 5 }} >Book now</Button>{' '}</Link>
              </div>
            </div>
          </div>
        </div>
      );
}

export default HomePage;