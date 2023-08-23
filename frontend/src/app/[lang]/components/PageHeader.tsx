interface PageHeaderProps {
  heading: string,
  text?: string,
}

export default function PageHeader({ heading, text } : PageHeaderProps) {
  return (
    <div className="mt-24 mb-8 w-full text-center">
    { text && <span className="text-violet-400 font-bold">{text}</span> }
    <h2 className="text-4xl my-4 lg:text-5xl font-bold font-heading">{heading}</h2>
  </div>
  );
}
