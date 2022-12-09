import React from 'react';
import './QuestionAns.css';
import { AiOutlinePlus} from "react-icons/ai";
import { useState } from 'react';
import Email from './Email';

const QuestionAns = () => {
    const [boxHidden1,setboxHidden1]=useState(false);
    const [boxHidden2,setboxHidden2]=useState(false);
    const [boxHidden3,setboxHidden3]=useState(false);
    const [boxHidden4,setboxHidden4]=useState(false);
    const [boxHidden5,setboxHidden5]=useState(false);
    const [boxHidden6,setboxHidden6]=useState(false);

    return(
        <>
            <div className="main">
                <h3>Frequently Asked Questions</h3>
                <div className="boxWrapper flex1">
                    {/* ---------------------------Question One Start-------------------------------*/}
                    <div className="boxwrapper1">
                        <div onClick={()=>{setboxHidden1(true);setboxHidden2(false);setboxHidden3(false);setboxHidden4(false);setboxHidden5(false);setboxHidden6(false);}} onDoubleClick={()=>{setboxHidden1(false)}} className="box1 flex">
                            <p >What is Netflix ?</p>
                            <AiOutlinePlus className={`${boxHidden1===true?'animation':'noAnimation'}`}/>
                        </div>
                        <div className={`box2 ${boxHidden1===true?'show':'hide'}`}>
                            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more  on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                        </div>
                    </div>
                     {/* ---------------------------Question One End-------------------------------*/}
                     {/* ---------------------------Question Second Start-------------------------------*/}
                    <div className="boxwrapper1">
                        <div onClick={()=>{setboxHidden1(false);setboxHidden2(true);setboxHidden3(false);setboxHidden4(false);setboxHidden5(false);setboxHidden6(false);}} onDoubleClick={()=>{setboxHidden2(false)}} className="box1 flex">
                            <p >How much does Netflix cost ?</p>
                            <AiOutlinePlus className={`${boxHidden2===true?'animation':'noAnimation'}`}/>
                        </div>
                        <div className={`box2 ${boxHidden2===true?'show':'hide'}`}>
                            <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
                        </div>
                    </div>
                    {/* ---------------------------Question Second End-------------------------------*/}
                    {/* ---------------------------Question Third Start-------------------------------*/}
                    <div className="boxwrapper1">
                        <div onClick={()=>{setboxHidden1(false);setboxHidden2(false);setboxHidden3(true);setboxHidden4(false);setboxHidden5(false);setboxHidden6(false);}} onDoubleClick={()=>{setboxHidden3(false)}} className="box1 flex">
                            <p >Where can I watch ?</p>
                            <AiOutlinePlus className={`${boxHidden3===true?'animation':'noAnimation'}`}/>
                        </div>
                        <div className={`box2 ${boxHidden3===true?'show':'hide'}`}>
                            <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                        </div>
                    </div>
                     {/* ---------------------------Question Third End-------------------------------*/}
                     {/* ---------------------------Question Four Start-------------------------------*/}
                    <div className="boxwrapper1">
                        <div onClick={()=>{setboxHidden1(false);setboxHidden2(false);setboxHidden3(false);setboxHidden4(true);setboxHidden5(false);setboxHidden6(false);}} onDoubleClick={()=>{setboxHidden4(false)}} className="box1 flex">
                            <p >How do I cancel ?</p>
                            <AiOutlinePlus className={`${boxHidden4===true?'animation':'noAnimation'}`}/>
                        </div>
                        <div className={`box2 ${boxHidden4===true?'show':'hide'}`}>
                            <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                        </div>
                    </div>
                    {/* ---------------------------Question Four End-------------------------------*/}
                    {/* ---------------------------Question Five Start-------------------------------*/}
                    <div className="boxwrapper1">
                        <div onClick={()=>{setboxHidden1(false);setboxHidden2(false);setboxHidden3(false);setboxHidden4(false);setboxHidden5(true);setboxHidden6(false);}} onDoubleClick={()=>{setboxHidden5(false)}} className="box1 flex">
                            <p>What can I watch on Netflix ?</p>
                            <AiOutlinePlus className={`${boxHidden5===true?'animation':'noAnimation'}`}/>
                        </div>
                        <div className={`box2 ${boxHidden5===true?'show':'hide'}`}>
                            <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                        </div>
                    </div>
                    {/* ---------------------------Question Five End-------------------------------*/}
                    {/* ---------------------------Question Six Start-------------------------------*/}
                    <div className="boxwrapper1">
                        <div onClick={()=>{setboxHidden1(false);setboxHidden2(false);setboxHidden3(false);setboxHidden4(false);setboxHidden5(false);setboxHidden6(true);}} onDoubleClick={()=>{setboxHidden6(false)}} className="box1 flex">
                            <p>Is Netflix good for Kids ?</p>
                            <AiOutlinePlus className={`${boxHidden6===true?'animation':'noAnimation'}`}/>
                        </div>
                        <div className={`box2 ${boxHidden6===true?'show':'hide'}`}>
                            <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                        </div>
                    </div>
                    {/* ---------------------------Question Six End-------------------------------*/}
                   
                </div>
                <Email/>  
            </div>
        </>
    )
};

export default QuestionAns;