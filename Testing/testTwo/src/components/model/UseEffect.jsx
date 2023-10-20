import { useState, useEffect } from 'react';

export default function UseEffect() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch('https://res.cloudinary.com/dpiiduvvx/raw/upload/v1697829682/productData').then((response) => response.json()).then((data) => {
      console.log(data);
      const allData = [...data.earbud, ...data.tshirt, ...data.shoes, ...data.tshirtWomen,]
      setData(allData);
      setLoading(false);
    });

  }, []);

  return (
    <div>
      <h1>Example Component</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id} style={styles.list}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  list: {
    margin: "10px 0",
    padding: "5px",
    listStyle: "none",
    backgroundColor: "#303030"
  }
}