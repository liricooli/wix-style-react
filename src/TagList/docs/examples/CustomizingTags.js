/* eslint-disable */

class CustomizingTags extends React.Component {
  render() {
    return <TagList tags={[   <TagList.Tag id="1" theme="warning">Warning</TagList.Tag>, <TagList.Tag id="2" theme="dark">Dark</TagList.Tag>, <TagList.Tag id="3" removable={false}>Unremovable</TagList.Tag>]} />
  }
}
