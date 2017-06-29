const App  =  require('../src/components/App');
const { renderComponent , expect } = require('./test_helper')

describe('App Component', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(App);
    console.log(component);
  });

  it('has to render App', () => {
    expect(component).to.exist;
  })
  
})