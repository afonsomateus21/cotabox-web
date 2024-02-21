import { gql } from "@apollo/client"

export const CREATE_USER = gql`
  mutation CreateUser($data: CreateUserInput!) {
    createUser(data: $data) {
      id,
      firstName,
      lastName,
      participation
    }
  }
`

export const DELETE_USER = gql`
  mutation DeleteUser($data: DeleteUserInput!) {
    deleteUser(data: $data)
  }
`