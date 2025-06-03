import { mount } from '@samplesleo/input-cpf';

const app = document.querySelector('#app');
mount(app, {
  label: 'CPF',
  name: 'cpf',
  value: '',
  onChange: (data) => {
    console.log('content: ', data)
  }
});
