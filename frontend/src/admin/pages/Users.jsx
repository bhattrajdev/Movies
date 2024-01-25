import React, { useState } from "react";

const Users = () => {
  const [selectedPoster, setSelectedPoster] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedPoster(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedPoster(null);
    }
  };

  return (
    <form>
      <input type="file" name="file" multiple onChange={handleFileChange} />
      {selectedPoster && (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <img
            src={selectedPoster}
            alt="Selected Poster"
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />
        </div>
      )}
    </form>
  );
};

export default Users;
