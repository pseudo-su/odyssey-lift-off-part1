import React from "react";
import { Layout, QueryResult } from "../components";
import TrackCard from "../containers/track-card";
import { gql, useQuery } from "@apollo/client";

export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  // Step 1 and 2
  // if (loading) return <>Loading...</>;
  // if (error) return <>Error! {error.message}</>;
  return (
    <Layout grid>
      {/* Step 1 */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      {/* Step 2 */}
      {/* {data?.tracksForHome?.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))} */}

      {/* Step 3 */}
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
