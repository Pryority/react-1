import React from 'react';

// TODO: Modify this function so that it accepts props from the parent component
export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };

  // Helper function that generates a random width for our placeholder images
  const randomWidth = () => {
    const number = Math.random() * (300 - 200) + 200;
    return number.toString().split('.')[0];
  };

  // TODO: Update the return statement to display the data we received as props
  return (
    <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="flex flex-col space-y-4 justify-center" style={cardStyle}>
        <img
          className=""
          src={`http://placecorgi.com/${randomWidth()}`}
          alt="Card cap"
        />
        <div className="flex flex-col space-y-2">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: {props.name}</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">Description: {props.description}</p>
          <p className="font-normal text-gray-700 dark:text-gray-400">ID: {props.id}</p >
          <a href="/" className="inline-flex items-center w-1/2 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Adopt {props.name}
          </a>
        </div>
      </div>
    </div>
  );
}
