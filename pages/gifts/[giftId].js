import React from "react";
import { useRouter } from 'next/router';
import { DetailsContainer, PODIUM_QUERY, variables } from "../../Containers/DetailsContainer/index";
import { initializeApollo } from '../../lib/apolloClient';

const Gift = () => {
    const { query: { giftId }} = useRouter();
    console.log(giftId);
    return (
        <DetailsContainer />
    );
};


export default Gift;
