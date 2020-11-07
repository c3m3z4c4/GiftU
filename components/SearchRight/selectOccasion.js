import React from "react";
import { gql,useQuery } from '@apollo/client'
import { SelectOccasion } from "./styles";

const OCCASION = gql`
	query getOccasion {
  		allOccasions {
    		id_occasion,
    		occasion_name
  		}
	}
`;

const SelectOccasionComponent = () => {
	const { data, loading, error, fetchMore, networkStatus } = useQuery(
        OCCASION,
        {
          notifyOnNetworkStatusChange: true,
        }
      )
      if (error) return <p>sorry, here is an error </p>;
      if (loading) return <div>Loading</div>;
	  const { allOccasions } = data;
	  console.log(allOccasions)
	return (
		<>
			<SelectOccasion>
				{
					allOccasions !== undefined 
					? <>
						{
							allOccasions.map(occasion => <option value={occasion.id_occasion} name="occasion">{occasion.occasion_name}</option>)
						}
					</>
					: null
				}
				
			</SelectOccasion>
		</>
	);
};

export {
    OCCASION,
	SelectOccasionComponent,
};
