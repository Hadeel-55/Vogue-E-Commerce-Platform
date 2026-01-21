import products from "../data/allProducts";
import { useState } from "react";
import { Form } from "react-bootstrap"; 

const ProductFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    color: "",
    size: "", 
    maxPrice: 500,
  });

  
  const handleSelect = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    
   
    const filtered = products.filter((item) => {
      return (
        (newFilters.size === "" || item.size === newFilters.size) &&
        (newFilters.color === "" || item.color === newFilters.color) &&
        item.price <= newFilters.maxPrice
      );
    });

    onFilterChange(filtered);
  };

  
  const resetFilters = () => {
  const initialFilters = {
    color: "",
    size: "",
    maxPrice: 500,
  };
  setFilters(initialFilters); 
  onFilterChange(products);   
};


  return (
    <div className="filter-sidebar p-3 border rounded shadow-sm  " style={{marginTop:'6.8rem'}}>
      <h5 className="mb-4">PRODUCT FILTERS</h5>

      <Form.Group className="mb-4 ">
        <h6>Size</h6>
        {["1-3Y", "4-5Y", "4-7Y"].map((size) => (
          <Form.Check 
            key={size}
            type="checkbox"
            label={size}
            name="size"
            value={size}
            onChange={handleSelect}
          />
        ))}
      </Form.Group>

      <Form.Group className="mb-4">
        <h6>Color</h6>
        {["Black", "Blue", "Burgundy" ,'Pink','White' ,'Green','Brown' ].map((color) => (
          <Form.Check 
            key={color}
            type="radio"
            label={color}
            name="color"
            value={color}
            onChange={handleSelect}
          />
        ))}
      </Form.Group>

     
      <Form.Group className="mb-4">
        <h6>Price</h6>
        <input 
          type="range" 
          className="form-range" 
          min="10" 
          max="500" 
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleSelect}
        />
        <div className="d-flex justify-content-between mt-2">
          <span>Price : $10</span>
          <span>${filters.maxPrice}</span>
        </div>
        
        <button 
  className="btn btn-danger w-100 mt-4" 
  onClick={resetFilters}
  style={{ fontWeight: 'bold' }}
>
  CLEAR FILTERS
</button>
      </Form.Group>
    </div>
  );
};

export default ProductFilters