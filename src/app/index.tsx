import ReactDOM from 'react-dom/client';
import { App } from '@app/App';
import '@shared/styles/index.css';

const root = document.getElementById('root');

const Message = () => (
  <div className="error-render-root">
    <h2>Error: Root element not found.</h2>
    <p>Please make sure to have a &lt;div id="root"&gt;&lt;/div&gt; in your HTML.</p>
  </div>
);

if (root) {
  ReactDOM.createRoot(root).render(
      <App />
  );
} else {
  ReactDOM.createRoot(document.body).render(<Message />);
}