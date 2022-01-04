import React from "react";
import '@testing-library/jest-dom';
import { AddCategory } from "../../components/AddCategory";
import { shallow } from 'enzyme';


describe('Pruebas en el componente AddCategory',()=>{

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories}/> );

    beforeEach(() => {
       jest.clearAllMocks(); 
       wrapper = shallow( <AddCategory setCategories={setCategories}/> );
    });

    test('debe mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change',{target:{value}});

        expect(wrapper.find('p').text().trim()).toBe(value);

    });

    test('NO debe postear la informacion con Submit ', () => {

        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled();
        
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hello world'        

        // Simular el inputChange
        wrapper.find('input').simulate('change', {target:{value}});
        // Simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        // SetCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        // El valor del input debe estar ''
        expect(wrapper.find('input').prop('value')).toBe('');

    })
    
    


})