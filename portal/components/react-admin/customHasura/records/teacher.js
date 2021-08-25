import gql from "graphql-tag";

// Define the additional fields that we want.
export const EXTENDED_TEACHER_RECORD = gql`
  {
    user {
      full_name
      username
      mobile_phone
    }
  }
`;