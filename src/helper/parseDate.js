const formatDate = (timestamp) => {
  const date = new Date(parseInt(timestamp));
  return date.toLocaleString();
};

export default formatDate;
