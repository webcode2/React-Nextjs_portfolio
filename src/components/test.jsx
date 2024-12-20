export default function Dropdown() {
    return (
      <div className="relative inline-block group w-full">
        {/* Trigger Button */}
        <button
          aria-expanded="false"
          aria-controls="dropdown-menu"
          className="px-4 py-2 text-white bg-blue-600 rounded group-hover:aria-expanded:true"
        >
          Options
        </button>
  
        {/* Dropdown Menu */}
        <div
          id="dropdown-menu"
          aria-hidden="true"
          className="absolute w-full z-50 mt-2 hidden group-hover:block bg-white border border-gray-200 rounded shadow-lg"
        >
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            Item 1
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            Item 2
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            Item 3
          </a>
        </div>
      </div>
    );
  }
  