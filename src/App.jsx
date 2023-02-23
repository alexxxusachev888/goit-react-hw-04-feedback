import { useState, useEffect } from "react";

import { Container } from "App.styled";
import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { Notification } from './components/Notification/Notification';

export default function App () {
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);
const [total, setTotal] = useState(0)
const [percentage, setPercentage] = useState(0);

useEffect(() => {
  const total = good + neutral + bad;
  const positiveFeeds = (total, good) => total ? `${(Math.ceil((good/total) * 100))}%` : `0%`;

  setPercentage(positiveFeeds(total, good));
  setTotal(total);
}, [good, neutral, bad]);


const handleFeedBack = (evt) => {
    const {name} = evt.target;
    
    switch(name) {
      case "good":
        setGood(prevState => prevState + 1);
        break;

        case "neutral":
          setNeutral(prevState => prevState + 1);
        break;

        case "bad":
          setBad(prevState => prevState + 1);
        break;

        default: 
          return;
    }
  }
  
    return (<Container> 

      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedBack} />
        </Section>    
      
      <Section title={'Statistics'}>
        { total ? 
        <Statistics 
          good = {good} 
          neutral = {neutral}
          bad= {bad}
          totalFeeds = {total}
          positiveFeeds = {percentage}
        /> :
         <Notification/>}
      </Section>
      </Container>)
  
};

