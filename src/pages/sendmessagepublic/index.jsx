import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import moment from 'moment-timezone';
import 'moment/locale/id';
moment.locale('id')
function SendMessagePublic() {
  
  
  const date = moment.tz('Asia/Jakarta').format('LLLL');
  console.log(date)
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null)
  const [valid, setValid] = useState("");
    const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("message", message);
    formData.append("date", date)
    if (file !== null) {
      formData.append("file", file);
    }

    if (formData.get("name") || formData.get("message")) {
      const url = "http://localhost:8080/publicmessage";
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      axios
        .post(url, formData, config)
        .then((response) => {
          console.log(response.data);
          if (response.data.success) {
            setValid("berhasil dikirim");
            formData.delete("name")
            formData.delete("message")
            formData.delete("file")
          }
        })
        .catch((error) => {
          console.log(error);
          setValid("failed to send data to server");
        });
    } else {
      setValid("need to fill");
    }
  };

return (
  <div className="container mx-auto mt-8">
    {valid && <div className="text-blue-500">{valid}</div>}
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      <Link to="/">Back</Link>
    </button>
    <div className="mt-4">
      <h1 className="text-blue-500 text-3xl font-semibold">Pesan Umum</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="bg-gray-100 p-4 rounded">
          <div className="mb-4">
            <label className="text-blue-500">Name</label>
            <input
              type="text"
              name="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter text here..."
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="text-blue-500">Message</label>
            <input
              type="text"
              name="judul"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter text here..."
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="text-blue-500">File Upload</label>
          <input
            type="file"
            onChange={handleFileInputChange}
            className="border border-gray-300 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Upload
        </button>
      </form>
    </div>
  </div>
);
}

export default SendMessagePublic;