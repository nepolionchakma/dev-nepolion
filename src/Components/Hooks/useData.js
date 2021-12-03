import { useState, useEffect } from 'react';

const useData = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return {
        projects,
    }
}

export default useData;