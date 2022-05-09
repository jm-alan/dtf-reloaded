import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

function AppRoot (): JSX.Element {
  return (
    <StrictMode>

    </StrictMode>
  );
}

const concurrentRoot = createRoot(document.querySelector("#react-root"));
concurrentRoot.render(<AppRoot />);
