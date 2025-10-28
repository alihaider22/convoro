const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>companion detail page with id: {id}</div>;
};

export default page;
