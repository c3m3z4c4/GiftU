import React from "react";
import { useRouter } from 'next/router';
import { DetailsContainer } from "../../Containers/DetailsContainer/index";

const Gift = () => {
    const { query: { giftId }} = useRouter();
    return (
        <DetailsContainer />
    );
};


export default Gift;
