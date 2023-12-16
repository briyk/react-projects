import { useState } from "react";

const useSearchTerm = () => {
  const [searchTerm, setSearchTerm] = useState('egypt');

  // Return an array instead of an object
  return [searchTerm, setSearchTerm];
}

export default useSearchTerm;
