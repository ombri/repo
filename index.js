const url = 'https://mockend.com/org/repo/graphql'

const query = gql`
{
  posts(orderBy: [{views: desc}], limit: 5) {
    id
    title
    views
  }
}
`
