import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Лабораторна робота №5</h1>
        <p>Студент: Ткачишин Степан</p>
      </main>
      <Footer />
    </div>
  );
}
export default App;
