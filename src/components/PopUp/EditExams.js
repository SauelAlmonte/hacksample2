import { useState } from 'react';

export const EditExam = (props) => {
  const [editedData, setEditedData] = useState(props.data);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdateClick = () => {
    props.onUpdate(editedData);
    props.onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-96">
        <div className="bg-gray-200 px-4 py-3 text-gray-700 font-bold">Edit Data</div>
        <div className="p-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
          <input type="text" name="name" id="name" value={editedData.name} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

          <label htmlFor="email" className="block text-gray-700 font-bold mb-2 mt-4">Email:</label>
          <input type="email" name="email" id="email" value={editedData.email} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2 mt-4">Phone:</label>
          <input type="tel" name="phone" id="phone" value={editedData.phone} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="bg-gray-200 px-4 py-3 text-right">
          <button onClick={props.onClose} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg mr-2">Cancel</button>
          <button onClick={handleUpdateClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">Update</button>
        </div>
      </div>
    </div>
  );
}

