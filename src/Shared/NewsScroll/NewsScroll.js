import React from 'react';
import Marquee from 'react-fast-marquee';
import { BsShieldFillCheck } from 'react-icons/bs';

const NewsScroll = () => {
  return (
    <div className="container mx-auto px-4 pt-10 -z-10">
      <Marquee
        className="py-2 focus:outline-none border border-rose-500 rounded -z-50"
        speed={30}
        pauseOnHover={true}>
        <BsShieldFillCheck className="text-red-500" />{' '}
        <p>
          &nbsp; রক্ত দান করা একটি গর্ব করার বিষয়। কারণ আপনি এমন কিছু করেছেন যা 3 জনের জীবন বাঁচাতে
          পারে।
        </p>{' '}
        &nbsp;&nbsp;&nbsp;
        <BsShieldFillCheck className="text-red-500" />{' '}
        <p>
          &nbsp; রক্ত দিয়ে স্থাপিত বন্ধন এবং সম্পর্ক গুলি অর্থ দিয়ে প্রতিষ্ঠিত বন্ধন এবং সম্পর্কের
          চেয়ে অনেক বেশী।
        </p>{' '}
        &nbsp;&nbsp;&nbsp;
        <BsShieldFillCheck className="text-red-500" />{' '}
        <p>
          &nbsp; রক্তদানের গুরুত্ব স্কুলে শেখানো উচিত, যাতে সবাই এর উপকারিতা সম্পর্কে সচেতন হয়।
        </p>{' '}
        &nbsp;&nbsp;&nbsp;
        <BsShieldFillCheck className="text-red-500" />{' '}
        <p>&nbsp; জীবন আমাদের রক্তে গড়া, রক্তে গড়া প্রাণ। রক্ত দিয়ে বাঁচাবো মোরা শত শত প্রাণ।</p>{' '}
        &nbsp;&nbsp;&nbsp;
        <BsShieldFillCheck className="text-red-500" />{' '}
        <p>
          &nbsp; নিয়মিত রক্তদান করে অন্যের বিপদে এগিয়ে আসুন। তাহলে আপনার বিপদেও সবাই এগিয়ে আসবে।
        </p>{' '}
        &nbsp;&nbsp;&nbsp;
        <BsShieldFillCheck className="text-red-500" />{' '}
        <p>
          &nbsp; রোগীর জন্য না হলে, অন্তত সেই মায়ের জন্য রক্ত ​​দান করুন যে তার ছেলে হারানোর বেদনা
          সহ্য করতে পারে না।
        </p>{' '}
        &nbsp;&nbsp;&nbsp;
        <BsShieldFillCheck className="text-red-500" />{' '}
        <p>
          &nbsp; আপনি টাকা দিয়ে কারোর জন্য জীবন কিনতে পারবেন না। কিন্তু আপনি রক্ত ​​দান করে কারোর
          জীবন বাঁচাতে পারেন।
        </p>{' '}
        &nbsp;&nbsp;&nbsp;
        <BsShieldFillCheck className="text-red-500" />{' '}
        <p>
          &nbsp; ঈশ্বর আপনাকে যা দিয়েছেন তা থেকে মানুষকে দান করুন। এটা অবশ্যই আপনার কাছে বৃহত্তর
          মূল্যের সাথে ফিরে আসবে।
        </p>{' '}
        &nbsp;&nbsp;&nbsp;
        <BsShieldFillCheck className="text-red-500" />{' '}
        <p>
          &nbsp; রক্তের কোন ধর্ম নেই। একজন খ্রিস্টান রক্ত ​​দিতে পারেন, একজন মুসলিম রক্ত ​​দিতে
          পারেন, একজন হিন্দু রক্ত ​​দিতে পারেন।
        </p>{' '}
        &nbsp;&nbsp;&nbsp;
        <BsShieldFillCheck className="text-red-500" />{' '}
        <p>
          &nbsp; একবার যদি লোকজন রক্তদানকে তাদের কর্তব্য হিসাবে বিবেচনা করা শুরু করে, তাহলে
          হাসপাতালে রোগীদের জন্য আর রক্তের অভাব হবে না।
        </p>{' '}
        &nbsp;&nbsp;&nbsp;
      </Marquee>
    </div>
  );
};

export default NewsScroll;
