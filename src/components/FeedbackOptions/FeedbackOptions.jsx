import PropTypes from 'prop-types';
import { FeedBackList, FeedBackListItem, FeedBackOption } from './FeedbackOptions.styled';

export function FeedbackOptions({options, onLeaveFeedback}) {
    return (
        <FeedBackList>
            {options.map((item, idx) => {
                return ( <FeedBackListItem key={idx}>
                            <FeedBackOption name={item} onClick={(evt)=>onLeaveFeedback(evt)} type="button">{item}</FeedBackOption>
                        </FeedBackListItem> )
            })}
        </FeedBackList>
          )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired, 
    onLeaveFeedback: PropTypes.func.isRequired,
}