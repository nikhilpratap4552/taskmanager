import { FaPlusCircle, FaTasks, FaCheckCircle, FaTrashAlt } from 'react-icons/fa';

export default function TaskManagerOverview() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="w-full py-10 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to TaskMaster</h1>
        <p className="text-lg max-w-2xl text-center">
          Manage your tasks efficiently with TaskMaster. Add, organize, and track your tasks with ease!
        </p>
      </header>

      <div className="container mx-auto p-8">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {/* Add New Task Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <FaPlusCircle className="text-blue-500 text-4xl mb-4 mx-auto animate-bounce" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Add New Tasks</h3>
            <p className="text-gray-600 text-center">
              Easily add new tasks to keep track of your work and deadlines.
            </p>
          </div>

          {/* View Tasks Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <FaTasks className="text-green-500 text-4xl mb-4 mx-auto animate-bounce" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">View All Tasks</h3>
            <p className="text-gray-600 text-center">
              View all your tasks in one place, sorted by priority or due date.
            </p>
          </div>

          {/* Mark as Complete Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <FaCheckCircle className="text-yellow-500 text-4xl mb-4 mx-auto animate-bounce" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Mark as Complete</h3>
            <p className="text-gray-600 text-center">
              Mark tasks as completed to track your progress and accomplishments.
            </p>
          </div>

          {/* Remove Tasks Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <FaTrashAlt className="text-red-500 text-4xl mb-4 mx-auto animate-bounce" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Remove Tasks</h3>
            <p className="text-gray-600 text-center">
              Delete tasks that are no longer relevant with a simple click.
            </p>
          </div>
        </div>
      </div>

      <footer className="w-full py-6 flex justify-center">
        <button className="bg-blue-600 px-6 py-3 rounded-full text-white font-bold hover:bg-blue-500 transition duration-300 transform hover:scale-105">
          Get Started Now
        </button>
      </footer>
    </div>
  );
}
