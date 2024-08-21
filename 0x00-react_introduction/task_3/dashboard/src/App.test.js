import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('main app', () => {
    it('renders without crashing', () => {
        const app = shallow(<App />);
        expect(app).toBeDefined();
    });

    it('renders the app-header', () => {
        const header = shallow(<div className='App-header'></div>);
        expect(header).toBeDefined();
    });

    it('renders App-body', () => {
        const body = shallow(<div className='App-body'></div>);
        expect(body).toBeDefined();
    });

    it('renders App-footer', () => {
        const footer = shallow(<div className='App-footer'></div>);
        expect(footer).toBeDefined();
    });
});
