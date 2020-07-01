/* eslint-disable */

class Usage extends React.Component {
  render() {
    return <Layout cols={1} gap="6px">
      <Text>Applied filters: </Text>
      <TagList tags={[ <TagList.Tag id="1">In Progress</TagList.Tag>, <TagList.Tag id="2">Canceled By Client</TagList.Tag>, <TagList.Tag id="3">Last 7 Days</TagList.Tag>]} actionButton={{label: 'Clear All'}} />
    </Layout>

  }
}


