import React from 'react';
import Marquee from 'react-fast-marquee';
import { BsShieldFillCheck } from 'react-icons/bs';

const NewsScroll = () => {
  return (
    <div className="container mx-auto px-4 pt-10">
      <Marquee
        className="py-2 focus:outline-none border border-rose-500 rounded"
        speed={80}
        pauseOnHover={true}>
        <BsShieldFillCheck />{' '}
        <p>
          &nbsp; I can be a React comdivonent, multidivle React comdivonents, or just some text.
        </p>{' '}
        &nbsp;&nbsp;&nbsp;
        <BsShieldFillCheck />{' '}
        <p>
          &nbsp; I can be a React comdivonent, multidivle React comdivonents, or just some text.
        </p>{' '}
        &nbsp;&nbsp;&nbsp;
        <BsShieldFillCheck />{' '}
        <p>
          &nbsp; I can be a React comdivonent, multidivle React comdivonents, or just some text.
        </p>{' '}
        &nbsp;&nbsp;&nbsp;
        <BsShieldFillCheck />{' '}
        <p>
          &nbsp; I can be a React comdivonent, multidivle React comdivonents, or just some text.
        </p>{' '}
        &nbsp;&nbsp;&nbsp;
        <BsShieldFillCheck />{' '}
        <p>
          &nbsp; I can be a React comdivonent, multidivle React comdivonents, or just some text.
        </p>{' '}
        &nbsp;&nbsp;&nbsp;
        <BsShieldFillCheck />{' '}
        <p>
          &nbsp; I can be a React comdivonent, multidivle React comdivonents, or just some text.
        </p>{' '}
        &nbsp;&nbsp;&nbsp;
        <BsShieldFillCheck />{' '}
        <p>
          &nbsp; I can be a React comdivonent, multidivle React comdivonents, or just some text.
        </p>{' '}
        &nbsp;&nbsp;&nbsp;
        <BsShieldFillCheck />{' '}
        <p>
          &nbsp; I can be a React comdivonent, multidivle React comdivonents, or just some text.
        </p>{' '}
        &nbsp;&nbsp;&nbsp;
        <BsShieldFillCheck />{' '}
        <p>
          &nbsp; I can be a React comdivonent, multidivle React comdivonents, or just some text.
        </p>{' '}
        &nbsp;&nbsp;&nbsp;
        <BsShieldFillCheck />{' '}
        <p>
          &nbsp; I can be a React comdivonent, multidivle React comdivonents, or just some text.
        </p>{' '}
        &nbsp;&nbsp;&nbsp;
      </Marquee>
    </div>
  );
};

export default NewsScroll;
