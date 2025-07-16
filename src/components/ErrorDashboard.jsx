import { useEffect, useState } from 'react';

function ErrorDashboard() {
  const [errors, setErrors] = useState([]);

  const fetchErrors = () => {
    fetch('http://localhost:5000/api/errors')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setErrors(data.errors);
          console.log("✅ Errors updated");
        }
      })
      .catch(err => console.error('❌ Error loading errors:', err));
  };

  useEffect(() => {
    fetchErrors(); // fetch once on mount
    const handler = () => {
      console.log("🔄 Refreshing errors...");
      fetchErrors();
    };

    window.addEventListener('error-logged', handler);

    return () => {
      window.removeEventListener('error-logged', handler);
    };
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Form Errors</h1>
      {errors.length === 0 ? (
        <p>No errors logged.</p>
      ) : (
        <ul className="space-y-4">
          {errors.map(error => (
            <li key={error.id} className="p-4 border rounded shadow">
              <p><strong>Type:</strong> {error.type}</p>
              <p><strong>Message:</strong> {error.message}</p>
              <p><strong>Page:</strong> {error.page}</p>
              <p><strong>Time:</strong> {new Date(error.created_at).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ErrorDashboard;
