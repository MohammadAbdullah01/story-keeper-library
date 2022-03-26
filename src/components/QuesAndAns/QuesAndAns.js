import React from 'react';
import './QuesAndAns.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faPersonCircleQuestion } from '@fortawesome/free-solid-svg-icons'

// const element = 
const QuesAndAns = () => {
    return (
        <div className='ques-ans'>
            <h1>Questions & Answering Part <FontAwesomeIcon icon={faPersonCircleQuestion} /></h1>
            <div className='q-a-item'>
                <h3>How react Works <FontAwesomeIcon icon={faQuestion} /></h3>
                <p>
                    react একটি javascript library যা efficient way তে user interface তৈরিতে সাহায্য করে। npx create-react-app দিয়ে আমরা npm module গুলো install করে সহজেই একটা react app পাই। react app অনেকগুলো component নিয়ে তৈরি যা App component এর under এ sub-component হিসেবে থাকে। component গুলো JSX দিয়ে তৈরি। JSX হল markup language এর মত দেখতে syntactic sugar(javascript নয়) । এই JSX কে  webpack নামের আরেকটা library Javascript এ convert করে bundle.js file এ রাখে। props এর মাদ্ধমে data এক component থেকে অন্য component এ flow হয়। state hook এর সাহায্যে আমরা dynamic data রাখতে পারি। এবং data change হলে page re-render হয়। re-render করার আগে react এর virtual DOM আমাদের original DOM এর সাথে compare করে নতুন যেখানে change হয়েছে শুধু সেই markup টা change করে দেয়।
                </p>
            </div>
            <div className='q-a-item'>
                <h3>How useState Works <FontAwesomeIcon icon={faQuestion} /></h3>
                <p>
                    useState হল বিশেষ ধরনের function যাকে react hook বলা হয়। এর সাহায্যে functional component এ state variable রাখা যায়। useState function arguement হিসেবে একটা initial data/state নেয় এবং return করে current state value এবং state update করার জন্য একটা function ।  যখন আমাদের state update করার প্রয়োজন হয় তখন state update করার function call করে arguement এ নতুন data pass করি। সুতরাং বলা যায় useState hook এক ধরনের dynamic storage । যখন state change হয় তখন virtual DOM এর সাথে original DOM এর compare করে changable markup গুলো change করা হয়।
                </p>
            </div>
        </div>
    );
};

export default QuesAndAns;