import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Card } from './components/Card';
import { Modal } from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar
        logo="MyBrand"
        links={[
          { label: 'Home', href: '#' },
          { label: 'Features', href: '#' },
          { label: 'About', href: '#' },
          { label: 'Contact', href: '#' },
        ]}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Component Showcase</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card Component */}
          <Card title="Card Component" className="space-y-4">
            <p className="text-gray-600">
              This is a reusable card component built with Tailwind CSS. It supports a title and arbitrary children.
            </p>
            <div className="flex gap-2">
               <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Tag 1</span>
               <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Tag 2</span>
            </div>
          </Card>

          {/* Input Component */}
          <Card title="Input Component">
            <div className="space-y-4">
              <Input
                label="Email Address"
                placeholder="you@example.com"
                type="email"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                label="Password"
                placeholder="********"
                type="password"
              />
              <p className="text-sm text-gray-500">
                Typed value: <span className="font-medium text-gray-900">{inputValue}</span>
              </p>
            </div>
          </Card>

          {/* Button Component */}
          <Card title="Button Component">
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" onClick={() => alert('Primary Clicked!')}>
                Primary Button
              </Button>
              <Button variant="secondary" onClick={() => alert('Secondary Clicked!')}>
                Secondary Button
              </Button>
              <Button variant="danger" onClick={() => alert('Danger Clicked!')}>
                Danger Button
              </Button>
            </div>
          </Card>

          {/* Modal Component */}
          <Card title="Modal Component">
            <p className="mb-4 text-gray-600">
              Click the button below to open a modal dialog.
            </p>
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              Open Modal
            </Button>
          </Card>
        </div>
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome!"
      >
        <p className="text-gray-600 mb-6">
          This is a modal component. It sits on top of the page content and requires user interaction to close.
        </p>
        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setIsModalOpen(false)}>
            Confirm
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
