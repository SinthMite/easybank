import React from 'react';
import './slider.css'; // Import CSS file

export default function Slider() {
    return (
        <div className="slider">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Career</a></li>
            </ul>
        </div>
    );
}