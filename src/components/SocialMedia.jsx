import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/kessie2862" target="_blank">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/prosperkessie/" target="_blank">
        <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
