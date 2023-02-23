import styled from "@emotion/styled";


export const FeedBackList = styled.ul`
    margin-top: 20px;   
    display: flex;
    justify-content: center;
    gap: 20px;
`
export const FeedBackListItem = styled.li`
    padding: 10px;
    list-style-type: none;   
`
export const FeedBackOption = styled.button`
    padding: 10px;

    font-size: 24px;
    border-radius: 10px;
    border: 1px solid #2E3F7F;
    outline: none;
    transition: transform 250ms linear, box-shadow 250ms linear;
    
    &:hover {
        transform: scale(1.2);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        font-weight: 500;
    }
`