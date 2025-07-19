
export const metadata = {
    title: 'Blog'
};

const posts = [
  {
    title: 'Welcome to My Blog',
    date: 'July 17th, 2025',
    description: 'This is my first blog post. I’ll be sharing thoughts on dev life, projects, and tips.',
    link: "/"
},
  {
    title: 'How I Built This Website',
    date: 'July 10th, 2025',
    description: 'A breakdown of the tech stack, structure, and deployment using Next.js and Netlify.',
    link: "/",
},
];

export default async function Page() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="space-y-8">
        {posts.map((post, index) => (
          <article key={index} className="border-b pb-6">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <h3 className="text-sm text-gray-500 mb-2">{post.date}</h3>
            <h3 className="text-white-700">{post.description}</h3>
            <p className='mb-2'><a href={post.link}> {"Click Here"}</a></p>
          </article>
        ))}
      </div>
    </main>
  );
}