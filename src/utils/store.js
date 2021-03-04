const cards = [
  { id: 'card-1', content: 'Learning material-ui' },
  { id: 'card-2', content: 'Learning testing library' },
  { id: 'card-3', content: 'Cooking tea' },
];

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: "Today's Todo",
      cards,
    },
  },
  listIds: ['list-1'],
};

export default data;
