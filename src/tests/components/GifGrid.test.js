import React from "react";
import { shallow } from 'enzyme';
import { GifGrid } from "../../components/GifGrid";
import {useFetchGifs} from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente GifGrid',()=>{

    const category = 'Paraguay'
    const mockUseFetchGifs = useFetchGifs;
    
    test('Debe mostrarse correctamente ', () => {

        mockUseFetchGifs.mockImplementation( category => {
            return { data: [], loading: true }
          });
        const wrapper = shallow( <GifGrid category={category}/> );
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => {
        const wrapper = shallow( <GifGrid category={category}/> );
        expect(wrapper).toMatchSnapshot();
        
        
    })
    
    

});
