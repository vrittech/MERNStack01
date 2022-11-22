import { useState, useEffect } from "react";

const useFetch = () => {
    const [loading, setLoading] = useState(true)
    const [todos, setTodos] = useState([]);
    const fetchTodos = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setTodos(data);
      };

      useEffect(() => {
        fetchTodos();
        setLoading(false)
      }, []);

      return [loading, todos]

}

export default useFetch;