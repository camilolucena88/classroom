import React from 'react'
import {Dropdown} from "react-bootstrap";

type Props = {
    onClick: (event: React.MouseEvent) => any;
    filters: string,
    removeFilter: (event: React.MouseEvent) => any; 
}

const FilterNavBar = ({onClick, filters, removeFilter} : Props) => {
    return<>
        <style type="text/css">
            {`
                .btn-link:hover {
                  background-color: #e83e8c;
                  color: white;
                }
            `}
        </style>
        <div className="pt-10 mt-10 container flex">
            <div className="flex-1 text-left">
                {filters.length > 0 ? <span className="badge rounded-pill bg-blue-400 text-white">{filters} <button onClick={removeFilter.bind(this)}> x</button></span> : ""}
            </div>
            <div className="flex-1 flex flex-row-reverse">
                <Dropdown>
                    <Dropdown.Toggle className="text-purple-500 text-decoration-none hover:bg-purple-500
                               hover:text-white transition duration-500 ease-in-out" variant="link"
                                     id="dropdown-basic">
                        Creado
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item data-filter="quiz" onClick={(e) => onClick.bind(this)}>Hoy
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Esta semana</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Este mes</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Este ano</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle className="text-purple-500 text-decoration-none hover:bg-purple-500
                               hover:text-white transition duration-500 ease-in-out" variant="link"
                                     id="dropdown-basic">
                        Ordenar por
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Ascendente</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Descentente</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Item href="#/action-2">Categoria</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Fecha</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle className="text-purple-500 text-decoration-none hover:bg-purple-500
                               hover:text-white transition duration-500 ease-in-out" variant="link"
                                     id="dropdown-basic">
                        Tipo
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item data-filter="quiz" onClick={onClick.bind(this)}>Quiz
                        </Dropdown.Item>
                        <Dropdown.Item data-filter="examen" onClick={onClick.bind(this)}>Examen</Dropdown.Item>
                        <Dropdown.Item data-filter="clase" onClick={onClick.bind(this)}>Clase</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    </>
}

export default FilterNavBar;