import styled from 'styled-components';

export const ValidPromoCode = styled.div`
	margin-top: 1rem;
    color: darkgreen;
`;

export const StyledActions = styled.div`
    display: flex;
    justify-content: space-between;
    .action-left {
        left: 0;
    }
    .action-right {
        right: 0;
    }
`;

export const StyledTable = styled.table`
    th {
        padding: 0.5rem;
        background: darkgray;
    }
    td {
        padding: 0.5rem;
        text-align: center;
        border-bottom: 1px solid darkgray;
        img {
            width: 3rem;
            height: auto;
        }
        &.cart-button {
            border-bottom: none;
        }
        &.cart-total {
            text-align: right;
            border-bottom: none;
        }
    }
`;
