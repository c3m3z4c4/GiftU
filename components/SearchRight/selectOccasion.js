import React from "react";
import { gql, useQuery } from "@apollo/client";
import { SelectOccasion } from "./styles";

const OCCASION = gql`
	query getOccasion {
		allOccasions {
			id_occasion
			occasion_name
		}
	}
`;

const SelectOccasionComponent = ({ onChange }) => {
	const { data, loading, error, fetchMore } = useQuery(OCCASION, {
		notifyOnNetworkStatusChange: true,
	});
	if (error) return <p>sorry, here is an error </p>;
	if (loading) return <div>Loading</div>;
	const { allOccasions } = data;
	return (
		<>
			<SelectOccasion name="occasion" onChange={onChange}>
				{allOccasions !== undefined ? (
					<>
						{allOccasions.map((occasion) => (
							<option key={occasion.id_occasion} value={occasion.id_occasion}>
								{occasion.occasion_name}
							</option>
						))}
					</>
				) : null}
			</SelectOccasion>
		</>
	);
};

export { OCCASION, SelectOccasionComponent };
