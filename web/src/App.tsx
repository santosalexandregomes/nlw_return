import { Warning } from 'phosphor-react';
import { Widget } from './components/Widget'

function App() {
  return (
    <>
      <section className='bg-[#FF6464] font-bold p-5 ml-auto mr-auto mt-5 rounded justify-center md:w-[30%] sm:w-[100%]'>
        <h1 className='text-[#630606] flex items-start group'><Warning size={25} /> Ops!</h1>
        <h4>Ocorreu um erro, favor enviar um feedback.</h4>
        <h4 className='font-normal'>Código do erro: SYS-96522.</h4>
      </section>
      <Widget/>
    </>
  );
}

export default App
