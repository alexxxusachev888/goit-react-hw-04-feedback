import PropTypes from 'prop-types';
import { DataList, FeedBackPoint } from './Statistics.styled';

export function Statistics({good, neutral, bad, totalFeeds, positiveFeeds}) {
    return (
        <DataList>
          <FeedBackPoint>Good: {good}</FeedBackPoint>
          <FeedBackPoint>Neutral: {neutral}</FeedBackPoint>
          <FeedBackPoint>Bad: {bad}</FeedBackPoint>
          <FeedBackPoint>Total: {totalFeeds}</FeedBackPoint>
          <FeedBackPoint>Positive feedback: {positiveFeeds}</FeedBackPoint>
        </DataList>
    )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral:PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeeds: PropTypes.number.isRequired,
  positiveFeeds: PropTypes.string.isRequired,
}