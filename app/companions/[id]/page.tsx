const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <div>companion detail page with id: {id}</div>;
};

export default page;
