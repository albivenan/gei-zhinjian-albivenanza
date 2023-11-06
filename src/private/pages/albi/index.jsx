export default function Albi() {
  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Your Name</h1>
        <p className="text-gray-600">Web Developer</p>

        <hr className="my-4" />

        <h2 className="text-xl font-bold">Education</h2>
        <p>Bachelor's Degree in Computer Science</p>

        <h2 className="text-xl font-bold mt-4">Experience</h2>
        <p>Web Developer at XYZ Company</p>

        <h2 className="text-xl font-bold mt-4">Skills</h2>
        <ul className="list-disc list-inside">
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
    </div>
  );
}