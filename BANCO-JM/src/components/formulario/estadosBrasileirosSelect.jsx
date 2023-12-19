import { useState } from 'react';
import { useEstadoContext } from '../../hooks/useEstadoContext';

const EstadosDoBrasilSelect = () => {
  const siglasEstados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
    'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
    'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
  ];

  const {estado, setEstado} = useEstadoContext()

  const handleChange = (event) => {
    setEstado(event.target.value);
  };

  return (
    <div className='input-caixa'>
      <label htmlFor="estado-select">Estado</label>
      <select 
        id="estado-select"
        value={estado}
        onChange={handleChange}
        required
      >
        <option value="">Selecione seu estado</option>
        {siglasEstados.map((sigla, index) => (
          <option key={index} value={sigla}>
            {sigla}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EstadosDoBrasilSelect;
