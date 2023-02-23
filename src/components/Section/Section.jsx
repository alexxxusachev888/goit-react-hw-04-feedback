import PropTypes from 'prop-types';
import { SectionBox, Header } from './Section.styled';

export function Section({title, children}) {
    return (
        <SectionBox>
            <Header>{title}</Header>
            {children}
        </SectionBox>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired, 
    children: PropTypes.element.isRequired,
}