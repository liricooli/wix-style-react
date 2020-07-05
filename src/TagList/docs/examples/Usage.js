/* eslint-disable */

function Usage() {
  const [currentTags, setTags] = React.useState([{id: '1', label: 'In Progress'}, {id: '2', label: 'Canceled By Client'}, {id: '3', label: 'Last 7 Days'}])
  const clearAll = () => setTags([]);
  const removeTag = tagId => setTags(currentTags.filter(({id}) => id !== tagId))
  return <FormField label="Applied filters:">
    <TagList tags={currentTags.map(({id, label})=> <TagList.Tag id={id} removable onRemove={() => removeTag(id)} >{label}</TagList.Tag>)} actionButton={{label: 'Clear All', onClick: clearAll}} />
  </FormField>
}
