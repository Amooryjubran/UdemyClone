export default function page({ params }: { params: { courseId: string } }) {
  console.log(params);

  return <div>{params.courseId}</div>;
}
