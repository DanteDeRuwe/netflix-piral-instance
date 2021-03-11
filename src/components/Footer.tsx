import * as React from 'react';

const Footer: React.FC = () => (
  <>
    <footer>
      <p className="text-lightgray">Made with</p>
      <p>
        <a target="_blank" href="https://reactjs.org">
          <img
            id="react-logo"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FReact_logo_logotype_emblem.png"
            height="10"
          />
          &nbsp;React
        </a>
      </p>
      <p className="text-lightgray">and</p>
      <p>
        <a target="_blank" href="https://piral.io">
          <img id="piral-logo" src="https://piral.io/logo-simple.f8667084.png" height="10" />
          &nbsp;Piral
        </a>
      </p>
      <p className="text-lightgray">by</p>
      <p>
        <a target="_blank" href="https://deruwe.me">
          Dante De Ruwe
        </a>
      </p>
      <p className="text-lightgray">for</p>
      <p>
        <a target="_blank" href="https://smapiot.com">
          <img id="smapiot-logo" src="https://smapiot.com/smapiot_green.03d1162a.svg" height="20" />
        </a>
      </p>
      <p className="copyright">&mdash; © {new Date().getFullYear()}</p>
    </footer>
  </>
);

export default Footer;
