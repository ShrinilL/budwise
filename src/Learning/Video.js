import React from "react";
import Logo from "../Login/Logo";
import PropTypes from "prop-types";
import './video.css';

const YoutubeEmbed = ({ embedId }) => (
    <body className="backgroundColor">
        <div className="flexboxClass">
            <Logo />
            <h1 id="heading">Personal Finance Hub</h1>
            <div className="Desc">
                <h3 className="descTitle">Welcome to the Learning Hub!</h3>
                <p className="descContent">Dive into the world of personal finance. Whether you're a beginner or a seasoned veteran, we've got your back! Join us to keep your finance journey safe and efficient.</p>
            </div>
            <div className="vidbar">
                <div className="forYou">
                    <h2>For You!</h2>
                    <iframe className="vid1"
                    width="336"
                    height="189"
                    src="https://www.youtube.com/embed/4j2emMn7UaI?si=pQsLpLb2aJcVNrLE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
                </div>
                <div className="forYou">
                    <h2>Trending!</h2>
                    <iframe className="vid2"
                    width="336"
                    height="189"
                    src="https://www.youtube.com/embed/NvkS7O7yNcQ?si=OuddgGH-E8Rg4C6P"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
                </div>
                <div className="forYou">
                    <h2>Daily Drop!</h2>
                    <iframe className="vid3"
                    width="336" 
                    height="189"
                    src="https://www.youtube.com/embed/ncRgGib1330?si=o9O0XuciSwm1lq_w"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </body>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;