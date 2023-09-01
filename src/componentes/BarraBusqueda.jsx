import React, { useState } from "react";

const BarraBusqueda = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [completedOnly, setCompletedOnly] = useState(false);
  const [searchBy, setSearchBy] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);


  const handleSearch = () => {
    onSearch({
      query: searchQuery,
      completed: completedOnly,
      searchBy: searchBy,
    });
  };

  return (
    <div>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Ingrese tarea para buscar..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="form-check mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          id="hechaCheck"
          checked={completedOnly}
          onChange={() => setCompletedOnly(!completedOnly)}
        />
        <label className="form-check-label" htmlFor="hechaCheck">
          Tarea Hecha
        </label>
      </div>
      <select
        className="form-control"
        value={searchBy}
        onChange={(e) => setSearchBy(e.target.value)}
      >
        <option value="">Seleccionar por:</option>
        <option value="fecha">Fecha</option>
        <option value="nombre">Nombre</option>
      </select>
      <button
        className="btn"
        type="button"
        style={{
          backgroundColor: "crimson",
          color: "white",
          margin: "auto",
          marginTop: "10px",
          display: "block",
        }}
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>
  );
};

export default BarraBusqueda;
