import gql from 'graphql-tag';

export const MissionsInfo = gql`
  query LaunchList {
    launches {
      flight_number
      mission_id
      mission_name
      launch_success
      launch_year
      launch_date_utc
    }
  }
`;