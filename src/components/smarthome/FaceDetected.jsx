// src/components/smartHome/FaceDetected.jsx

const FaceDetected = ({ faces = [] }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h3 className="text-lg font-semibold mb-4">Recent Faces Detected</h3>
      <div className="space-y-4">
        {faces.slice(0, 3).map((face, index) => (
          <div key={index} className="flex items-center space-x-4 border-b pb-2">
            <img
              src={face.imageUrl || 'placeholder-image.jpg'}
              alt={`Face ${index + 1}`}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="font-medium">{face.name || 'Unknown'}</p>
              <p className="text-sm text-gray-500">{face.date || 'Unknown Date'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaceDetected;
